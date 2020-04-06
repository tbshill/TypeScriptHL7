import { EventEmitter } from 'events';
import { Transform } from 'stream';
import { getSegmentNameFromString } from '../hl7Utils';
import fs from 'fs';

/**
 * @description
 * Streams in an HL7 flat file that does not wrap it's messages in MLLP flags. 
 * Messages are deliniated by the MSH segment.
 * 
 * @emits hl7 'hl7' when a message has been read
 * 
 * @emits end 'end' when the file is finished being read
 * 
 * @example
 * const file = new FlatFile('../data/OB_FileService_ORU.txt', '\n');
 * 
 * file.on('hl7',(message: string)=>{ ... });
 * 
 * file.on('end',() => { console.log("Finished Reading File")});
 * 
 * file.start();
 */
export class FlatFile extends EventEmitter {
    messageCount = 0;
    msg = ""
    
    /**
     * 
     * @param filepath File path to be read
     * @param endline The newline character that is used. (Default is \r);
     */
    constructor(public filepath: string, public endline: string = '\r') {
        super();
    }

    /**
     * Starts Streaming the file in. Splits messages on 'MSH' and then emits the message on 'hl7'
     */
    start() {
        const endline = this.endline;
        const Hl7Splitter = new Transform({
            flush(done) {
                this.push((this as any).msg)
                done()
            },
            objectMode: true,
            transform(chunk: Buffer, encoding, callback) {
                // console.log(chunk);
                // if(this.msg != "") {
                //     console.log("NON EMPTY MSG");
                //     console.log((this as any).msg)
                // }
                if ((this as any).msg == undefined || (this as any).msg == null) (this as any).msg = "";
                let reading = false;
                let segments = chunk.toString().split(endline)
                // console.log(segments);
                segments.forEach(seg => {
                    // console.log(getSegmentNameFromString("-"+seg+"-"));
                    if (getSegmentNameFromString(seg) == "MSH") {
                        // console.log("FOUND MSH");
                        // performance.mark("Init-"+messageCount);
                        if ((this as any).msg != "" && (this as any).msg != null) {
                            // performance.mark("Finish-"+messageCount);
                            this.push((this as any).msg);
                            // performance.measure(`${messageCount}`, "Init-" + messageCount, "Finish-" + messageCount)
                        }
                        // messageCount += 1;
                        (this as any).msg = ""
                        reading = true;

                    }
                    (this as any).msg += seg + "\r";
                });
                callback()
            }
        })


        const readStream = fs.createReadStream(this.filepath).on('open', () => {
            // performance.mark('A');
        });
        readStream
            .pipe(Hl7Splitter)
            .on('data', (msg: string) => {
                // console.log(msg);
                this.messageCount += 1;
                this.emit('hl7', msg.toString());
            }).on('end', () => {
                console.log("Finished Loading " + this.messageCount);
                this.emit('end');
            });
    }
}