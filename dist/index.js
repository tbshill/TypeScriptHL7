"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hl7Utils_1 = require("./hl7Utils");
const mllp_1 = require("./network/mllp");
async function main() {
    const mllp = new mllp_1.MLLPServer('0.0.0.0', 6200);
    mllp.listen(() => {
        console.log('Listening');
    });
    mllp.on('mllp', event => {
        let message = event.message;
        const socket = event.socket;
        try {
            message = hl7Utils_1.normalizeNewLines(message);
            const msh = hl7Utils_1.getMSHFromMessage(message);
            const ack = hl7Utils_1.buildACK(message, 'AA');
            socket.write(hl7Utils_1.wrapInMLLP(ack));
            console.log('6200:', ack);
        }
        catch (error) {
            // console.error(error);
            const ack = hl7Utils_1.buildACK(message, 'AE', error.message);
            socket.write(hl7Utils_1.wrapInMLLP(ack));
        }
    });
    const mllp2 = new mllp_1.MLLPServer('0.0.0.0', 6204);
    try {
        const ack = await mllp2.send("localhost", 8010, 'Hello');
        console.log(ack);
    }
    catch (error) {
        console.error(error);
    }
}
main();
