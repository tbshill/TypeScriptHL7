import { HL7Obj } from '../base/HL7Obj';
import { TX, CQ, ST, TS, ID } from '.';

export class TQ extends HL7Obj {
    quantity: ST = new ST(this.depth.peekDown()); // FIXME: Should be CQ
    interval: ST = new ST(this.depth.peekDown());
    duration: ST = new ST(this.depth.peekDown());
    start_datetime: TS = new TS(this.depth.peekDown());
    end_datetime: TS = new TS(this.depth.peekDown());
    priority: ID = new ID(this.depth.peekDown());
    condition: ST = new ST(this.depth.peekDown());
    text: TX = new TX(this.depth.peekDown());
    conjunction: ID = new ID(this.depth.peekDown());
    order_sequencing: ST = new ST(this.depth.peekDown());


    hl7_obj_array = [

        this.quantity,
        this.interval,
        this.duration,
        this.start_datetime,
        this.end_datetime,
        this.priority,
        this.condition,
        this.text,
        this.conjunction,
        this.order_sequencing,

    ]
}