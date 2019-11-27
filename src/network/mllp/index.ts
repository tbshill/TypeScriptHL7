import * as net from "net";
import { EventEmitter } from 'events';
import { Socket } from 'dgram';

interface MLLPOptions {
    header: string;
    trailer: string;
    name: string;

}

export class MLLPServer extends EventEmitter {

    private VT = String.fromCharCode(0x0b);
    private FS = String.fromCharCode(0x1c);
    private CR = String.fromCharCode(0x0d);

    private header = this.VT;
    private trailer = this.FS + this.CR;
    private name = '';
    host: string;
    port: number;
    private message: string;

    server: net.Server;
    socket: net.Socket;

    constructor(host: string, port: number, options?: MLLPOptions) {
        super();

        if (options) {
            this.header = options.header || this.header;
            this.trailer = options.trailer || this.trailer;
            this.name = options.name || this.name;
        }

        this.host = host || '127.0.0.1';
        this.port = port || 6000;
        this.message = '';

        this.socket = new net.Socket();

        this.server = net.createServer(socket => {
            this.socket = socket
            socket.on('data', (data) => {

                let str_data = data.toString();
                // console.log(str_data);

                // Check for the start of the MLLP message
                if (str_data.indexOf(this.header) > -1) {
                    this.message = ''; // Reset the message
                    str_data = str_data.replace(this.header, '')
                }

                // Append the str_data to the message
                this.message += str_data;

                // Check for closing tags
                if (str_data.indexOf(this.trailer) > -1) {
                    this.message = this.message.replace(this.trailer, ''); // Remove the trailer

                    // Emit the Data after the trailer
                    // Push the message into the Event Loop
                    // Offload the responsibility of creating an ACK 

                    // const context = this.getSummary();
                    // context.socket = socket;

                    this.emit('mllp', { message: this.message, socket: socket });
                }

            });
        })
        this.server.on('error', (err) => {
            this.emit('error', err);
        })
        this.server.on('connection', (socket) => {
            // this.clients.push(socket);
            this.emit('connection', socket);
        })
        this.server.on('close', () => {
            this.emit('close');
        })
    }

    public listen(callback: () => void) {
        console.log("Listenting!")
        this.server.listen(this.port, this.host);
        this.emit('listening');
        callback()
    }

    public async send(host: string, port: number, data: string): Promise<string> {

        return new Promise((resolve, reject) => {
            const mllp_data = this.wrapInMLLP(data);

            const socket = net.connect({ host, port });
            // socket.connect({ host, port })

            socket.on('connect', () => {
                socket.write(mllp_data);
                console.log('CONNECTED')
            })

            socket.on('data', (buffer) => {
                resolve(buffer.toString());
            });

            socket.on('error', (err) => {
                reject(err);
            })

        });
    }

    public wrapInMLLP(data: string): string {
        return this.header + data + this.trailer;
    }
}
