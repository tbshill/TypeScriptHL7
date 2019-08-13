import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';

export class PT extends HL7Obj {
    id: ID = new ID(this.depth.peekDown());
    mode: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.id,
        this.mode
    ]
}