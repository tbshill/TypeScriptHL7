import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { IS } from './IS';
import { DT } from './DT';

export class DLN extends HL7Obj {
    /** -1 */license_number: ST = new ST(this.depth.peekDown());
    /** -2 */issuing_state: IS = new IS(this.depth.peekDown());
    /** -3 */expiration_date: DT = new DT(this.depth.peekDown());

    hl7_obj_array = [
        this.license_number,
        this.issuing_state,
        this.expiration_date
    ]
}