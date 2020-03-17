import { HL7Obj } from '../../base/HL7Obj';
import { MO } from '../MO';
import { CE } from '../CE';
/**
 * CM for OBR - Charge_to_practice
 */
export declare class Z_CP extends HL7Obj {
    dollar_amount: MO;
    charge_code: CE;
    hl7_obj_array: (CE | MO)[];
}
