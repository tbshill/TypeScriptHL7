/// <reference types="node" />
import * as net from "net";
import { EventEmitter } from 'events';
/**
 *
 * @example
 *  const server = net.createServer(socket => {
 *     socket.on('data', mllpProtocol(server, socket));
 *  })
 *
 *  server.on('mllp', ({message, socket})=>{ ... })
 *  server.listen(9000);
 *
 * @param emitter An object that has the ability to emit events.
 * @param socket The socket to send Acknowledgements on
 * @param encodingChars "(Optinal) parameter for adjusting the MLLP protocol's head and tail tags"ts
 *
 */
export interface IEncodingCharacters {
    head: string;
    tail: string;
}
export declare function mllpProtocol(emitter: EventEmitter, socket: net.Socket, encodingChars?: IEncodingCharacters): (onDataBufferData: Buffer) => void;
