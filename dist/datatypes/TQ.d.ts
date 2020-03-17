import { HL7Obj } from '../base/HL7Obj';
import { TX, ST, TS, ID } from '.';
export declare class TQ extends HL7Obj {
    quantity: ST;
    interval: ST;
    duration: ST;
    start_datetime: TS;
    end_datetime: TS;
    priority: ID;
    condition: ST;
    text: TX;
    conjunction: ID;
    order_sequencing: ST;
    hl7_obj_array: (ST | ID | TS | TX)[];
}
