import * as net from "net";
import { EventEmitter } from 'events';

export function mllpProtocol(emitter: EventEmitter, socket: net.Socket) {
    let message = '';
    const VT = String.fromCharCode(0x0b);
    const FS = String.fromCharCode(0x1c);
    const CR = String.fromCharCode(0x0d);

    const header = VT;
    const trailer = FS + CR;

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
// const server = net.createServer(socket => {
//     socket.on('data', mllpProtocol(server))
// })

// server.listen(9000);


// export class MLLPClient {
//     socket: net.Socket;
//     constructor(public host: string, public port: number) {
//         this.socket = net.connect({ host, port });
//         console.log(this.socket);
//         this.socket.on('data', (incomming) => {
//             console.log("Incomming", incomming.toString());
//         })
//     }
//     send(data: any) {
//         console.log(`Sending to ${this.socket.remoteAddress}:${this.socket.remotePort}`);
//         this.socket.write(data);
//     }

// }