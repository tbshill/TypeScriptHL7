"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const stream_1 = require("stream");
const hl7Utils_1 = require("../hl7Utils");
const fs_1 = __importDefault(require("fs"));
/**
 * @description
 * Streams in an HL7 flat file that does not wrap it's messages in MLLP flags.
 * Messages are deliniated by the MSH segment.
 *
 * Emits 'hl7' when a message has been read
 * Emits 'end' when the file is finished being read
 *
 * @example
 * const file = new FlatFile('../data/OB_FileService_ORU.txt', '\n');
 * file.on('hl7',(message: string)=>{ ... });
 * file.on('end',() => { console.log("Finished Reading File")});
 * file.start();
 */
class FlatFile extends events_1.EventEmitter {
    /**
     *
     * @param filepath File path to be read
     * @param endline The newline character that is used. (Default is \r);
     */
    constructor(filepath, endline = '\r') {
        super();
        this.filepath = filepath;
        this.endline = endline;
        this.messageCount = 0;
        this.msg = "";
    }
    /**
     * Starts Streaming the file in. Splits messages on 'MSH' and then emits the message on 'hl7'
     */
    start() {
        const endline = this.endline;
        const Hl7Splitter = new stream_1.Transform({
            flush(done) {
                this.push(this.msg);
                done();
            },
            objectMode: true,
            transform(chunk, encoding, callback) {
                // console.log(chunk);
                // if(this.msg != "") {
                //     console.log("NON EMPTY MSG");
                //     console.log((this as any).msg)
                // }
                if (this.msg == undefined || this.msg == null)
                    this.msg = "";
                let reading = false;
                let segments = chunk.toString().split(endline);
                // console.log(segments);
                segments.forEach(seg => {
                    // console.log(getSegmentNameFromString("-"+seg+"-"));
                    if (hl7Utils_1.getSegmentNameFromString(seg) == "MSH") {
                        // console.log("FOUND MSH");
                        // performance.mark("Init-"+messageCount);
                        if (this.msg != "" && this.msg != null) {
                            // performance.mark("Finish-"+messageCount);
                            this.push(this.msg);
                            // performance.measure(`${messageCount}`, "Init-" + messageCount, "Finish-" + messageCount)
                        }
                        // messageCount += 1;
                        this.msg = "";
                        reading = true;
                    }
                    this.msg += seg + "\r";
                });
                callback();
            }
        });
        const readStream = fs_1.default.createReadStream(this.filepath).on('open', () => {
            // performance.mark('A');
        });
        readStream
            .pipe(Hl7Splitter)
            .on('data', (msg) => {
            // console.log(msg);
            this.messageCount += 1;
            this.emit('hl7', msg.toString());
        }).on('end', () => {
            console.log("Finished Loading " + this.messageCount);
            this.emit('end');
        });
    }
}
exports.FlatFile = FlatFile;
