import { HL7Obj } from '../../base/HL7Obj';
import { MO } from '../MO';
import { CE } from '../CE';
/**
 * CM for OBR - Charge_to_practice
 */

export class Z_CP extends HL7Obj {
    dollar_amount: MO = new MO(this.depth.peekDown());
    charge_code: CE = new CE(this.depth.peekDown());

    hl7_obj_array = [
        this.dollar_amount,
        this.charge_code
    ]
}