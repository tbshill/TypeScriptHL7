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

export function mllpProtocol(emitter: EventEmitter, socket: net.Socket, encodingChars?: IEncodingCharacters) {
    let message = '';
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);

    const header = encodingChars ? encodingChars.head : VT;
    const trailer = encodingChars? encodingChars.tail : FS + CR;

    return (onDataBufferData: Buffer) => {
        let str_data = onDataBufferData.toString();
        if (str_data.indexOf(header) > -1) {
            message = '';
            str_data = str_data.replace(header, '')
        }
        message += str_data;

        if (str_data.indexOf(trailer) > -1) {
            message = message.replace(trailer, '');
            emitter.emit('mllp', { message, socket });
        }
    }
}