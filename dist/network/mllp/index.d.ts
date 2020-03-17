import * as net from "net";
import { EventEmitter } from 'events';
interface MLLPOptions {
    header: string;
    trailer: string;
    name: string;
}
export interface onMLLPData {
    message: string;
    socket: net.Socket;
}
export declare class MLLPServer extends EventEmitter {
    private VT;
    private FS;
    private CR;
    private header;
    private trailer;
    private name;
    host: string;
    port: number;
    private message;
    server: net.Server;
    socket: net.Socket;
    constructor(host: string, port: number, options?: MLLPOptions);
    listen(callback: () => void): void;
    stopListening(callback: () => void): void;
    connect(host: string, port: number): Promise<net.Socket>;
    /**
     *
     * @param host Hostname or IP address
     * @param port Port of destination
     * @param data data to be sent (Does not need to be wrapped in MLLP)
     *
     * The socket is closed after the data is recieved.
     */
    send(host: string, port: number, data: string): Promise<string>;
    wrapInMLLP(data: string): string;
}
export {};
