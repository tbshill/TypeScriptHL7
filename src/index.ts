import { buildACK, wrapInMLLP, getSegmentNameFromString, normalizeNewLines, getMSHFromMessage } from './hl7Utils';

import { MLLPServer } from "./network/mllp";
import * as net from 'net';
import { MSH, PID } from './segments';

async function main() {

    const mllp = new MLLPServer('0.0.0.0', 6200);
    mllp.listen(() => {
        console.log('Listening');
    });
    mllp.on('mllp', event => {
        let message = event.message as string;
        const socket = event.socket as net.Socket;

        try {

            message = normalizeNewLines(message);
            const msh: MSH = getMSHFromMessage(message);

            const ack = buildACK(message, 'AA');
            socket.write(wrapInMLLP(ack));
            console.log('6200:', ack)




        } catch (error) {
            // console.error(error);
            const ack = buildACK(message, 'AE', error.message);
            socket.write(wrapInMLLP(ack));
        }
    });


    const mllp2 = new MLLPServer('0.0.0.0', 6204);

    try {
        const ack = await mllp2.send("localhost", 8010, 'Hello');
        console.log(ack);

    } catch (error) {
        console.error(error);
    }



}

main()
