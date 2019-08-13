import { HL7Obj } from '../../base/HL7Obj';
import { EI } from '../EI';
//<parent's placer order number (EI)> ^ <parent's filler order number (EI)>


/**
 * CM for ORC-8 <parent>
 */
export class Z_PA extends HL7Obj {
    parents_placer_order_number: EI = new EI(this.depth.peekDown());
    parents_filler_order_number: EI = new EI(this.depth.peekDown());

    hl7_obj_array = [
        this.parents_placer_order_number,
        this.parents_filler_order_number
    ]
}
