"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const events_1 = require("events");
class MLLPServer extends events_1.EventEmitter {
    constructor(host, port, options) {
        super();
        this.VT = String.fromCharCode(0x0b);
        this.FS = String.fromCharCode(0x1c);
        this.CR = String.fromCharCode(0x0d);
        this.header = this.VT;
        this.trailer = this.FS + this.CR;
        this.name = '';
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
            this.socket = socket;
            socket.on('data', (data) => {
                let str_data = data.toString();
                // console.log(str_data);
                // Check for the start of the MLLP message
                if (str_data.indexOf(this.header) > -1) {
                    this.message = ''; // Reset the message
                    str_data = str_data.replace(this.header, '');
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
        });
        this.server.on('error', (err) => {
            this.emit('error', err);
        });
        this.server.on('connection', (socket) => {
            this.emit('connection', socket);
        });
        this.server.on('close', () => {
            this.emit('close');
        });
    }
    listen(callback) {
        console.log("Listenting!");
        this.server.listen(this.port, this.host);
        this.emit('listening');
        callback();
    }
    stopListening(callback) {
        this.server = this.server.close();
        this.emit('close');
        callback();
    }
    async connect(host, port) {
        return new Promise((resolve, reject) => {
            const socket = net.connect({ host, port });
            socket.on('connect', () => {
                resolve(socket);
            });
        });
    }
    /**
     *
     * @param host Hostname or IP address
     * @param port Port of destination
     * @param data data to be sent (Does not need to be wrapped in MLLP)
     *
     * The socket is closed after the data is recieved.
     */
    async send(host, port, data) {
        return new Promise((resolve, reject) => {
            const mllp_data = this.wrapInMLLP(data);
            const socket = net.connect({ host, port });
            // socket.connect({ host, port })
            socket.on('connect', () => {
                socket.write(mllp_data);
            });
            socket.on('data', (buffer) => {
                socket.end();
                resolve(buffer.toString());
            });
            socket.on('error', (err) => {
                socket.end();
                reject(err);
            });
            socket.on('close', (err) => {
                console.log.bind(console, 'MLLP Close', err);
            });
        });
    }
    wrapInMLLP(data) {
        return this.header + data + this.trailer;
    }
}
exports.MLLPServer = MLLPServer;
