/// <reference types="node" />
import { EventEmitter } from 'events';
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
export declare class FlatFile extends EventEmitter {
    filepath: string;
    endline: string;
    messageCount: number;
    msg: string;
    /**
     *
     * @param filepath File path to be read
     * @param endline The newline character that is used. (Default is \r);
     */
    constructor(filepath: string, endline?: string);
    /**
     * Starts Streaming the file in. Splits messages on 'MSH' and then emits the message on 'hl7'
     */
    start(): void;
}
