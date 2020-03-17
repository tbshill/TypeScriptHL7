import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { IS } from './IS';
import { DT } from './DT';
export declare class DLN extends HL7Obj {
    /** -1 */ license_number: ST;
    /** -2 */ issuing_state: IS;
    /** -3 */ expiration_date: DT;
    hl7_obj_array: (ST | IS | DT)[];
}
