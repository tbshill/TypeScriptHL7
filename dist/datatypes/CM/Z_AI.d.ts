import { HL7Obj } from '../../base/HL7Obj';
import { ST } from '../ST';
import { DT } from '../DT';
/**
 * CM for OBR - Charge_to_practice
 */
export declare class Z_AI extends HL7Obj {
    authorization_number: ST;
    date: DT;
    source: ST;
    hl7_obj_array: (ST | DT)[];
}
