import { HL7Obj } from '../../base/HL7Obj';
import { ST } from '../ST';
import { DT } from '../DT';
/**
 * CM for OBR - Charge_to_practice
 */

export class Z_AI extends HL7Obj {
    authorization_number: ST = new ST(this.depth.peekDown());
    date: DT = new DT(this.depth.peekDown());
    source: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.authorization_number,
        this.date,
        this.source
    ]
}