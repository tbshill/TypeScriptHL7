import { HL7Obj } from '../base/HL7Obj';
import { ST } from '.';

export class TS extends HL7Obj {
    datetime: ST = new ST(this.depth.peekDown());
    precision: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.datetime,
        this.precision
    ]
}
