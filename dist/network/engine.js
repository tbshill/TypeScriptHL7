"use strict";
// import { mllpProtocol } from './mllp/v3';
// import * as net from "net";
// import { fromEvent, Observable, zip, ReplaySubject, merge } from 'rxjs';
// import { map, tap, take, delay } from 'rxjs/operators';
// import { buildACK, getMSHFromMessage, wrapInMLLP, getMSAFromMessage } from '../hl7Utils';
// interface mllpEvent { message: string, socket: net.Socket }
// interface MLLPClient extends net.Socket {
//     acks: Observable<mllpEvent>;
// }
// class Engine {
//     clients: { [name: string]: MLLPClient } = {};
//     servers: { [name: string]: net.Server } = {};
//     createServer(name: string, port: number): net.Server {
//         if (this.servers[name]) {
//             throw Error('Server with Name already exists');
//         } else {
//             console.log("Created Server");
//             const server = net.createServer((socket) => {
//                 socket.on('data', mllpProtocol(server, socket));
//             }).on('mllp', (message) => {
//                 // console.log(message);
//             }).listen(port);
//             this.servers[name] = server;
//             return server;
//         }
//     }
//     createClient(name: string, host: string, port: number): MLLPClient {
//         if (this.clients[name]) {
//             throw Error('Server with Name already exists');
//         } else {
//             const client: MLLPClient = net.connect({ host, port });
//             client.on('data', mllpProtocol(client, client));
//             client.acks = fromEvent<mllpEvent>(client, 'mllp');
//             this.clients[name] = client;
//             return client;
//         }
//     };
// }
// const engine = new Engine();
// engine.createServer("Splitter", 9000);
// engine.createServer("test-out1", 9001);
// engine.createServer("test-out2", 9002);
// engine.createClient('Splitter-Out1', "0.0.0.0", 9001);
// engine.createClient("Splitter-Out2", "0.0.0.0", 9002);
// const IN_Splitter = fromEvent<mllpEvent>(engine.servers["Splitter"], 'mllp');
// const TESTOUT1 = fromEvent<mllpEvent>(engine.servers["test-out1"], 'mllp');
// const TESTOUT2 = fromEvent<mllpEvent>(engine.servers["test-out2"], 'mllp');
// const fromSplitter = IN_Splitter
// const fromReplay = new ReplaySubject<mllpEvent>(100);
// engine.clients['Splitter-Out1'].acks.subscribe(next => {
//     if (getMSAFromMessage(next.message).ack_code.toString() !== 'AA') {
//     }
// });
// engine.clients['Splitter-Out2'].acks.subscribe(next => {
//     if (getMSAFromMessage(next.message).ack_code.toString() !== 'AA') {
//     }
// });
// merge(fromSplitter, fromReplay).pipe(
//     tap(next => {
//         engine.clients['Splitter-Out1'].write(wrapInMLLP(next.message));
//         engine.clients['Splitter-Out2'].write(wrapInMLLP(next.message));
//     })
// ).subscribe(next => {
//     next.socket.write(buildACK(next.message, 'AA'));
// });
// TESTOUT1.subscribe(next => {
//     console.log('OUT1:', next.message);
//     next.socket.write(wrapInMLLP(buildACK(next.message, 'AA')));
// })
// TESTOUT2.subscribe(next => {
//     console.log('OUT2:', next.message);
//     next.socket.write(wrapInMLLP(buildACK(next.message, 'AE')));
// })
