import { MLLPServer } from "./mllp";
import { MSH } from '../segments';
class Engine {
    private mllp: MLLPServer;
    constructor(host: string, port: number) {
        this.mllp = new MLLPServer(host, port);
        this.mllp.on('mllp', event => {
            const message = event.message as string;
            const socket = event.socket;
            const msh_segment = new MSH();

            const msh_segment_st = message.split('\n', 1)[0];
            msh_segment.fromString(msh_segment_st);

        })
    }

}


const engine = new Engine("0.0.0.0", 6001);
