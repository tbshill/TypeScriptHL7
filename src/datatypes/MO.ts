import { HL7Obj } from '../base/HL7Obj';
import { NM } from './NM';
import { ID } from './ID';

export class MO extends HL7Obj {
    quantity: NM = new NM(this.depth.peekDown());
    denomination: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.quantity,
        this.denomination
    ]
}