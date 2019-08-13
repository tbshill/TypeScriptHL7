import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';

// <identifier (ST)> ^ <text (ST)> ^ <name of coding system (ST)> ^ <alternate identifier (ST)> ^ <alternate text (ST)> ^ <name of alternate coding system (ST)>

export class CE extends HL7Obj {
    /** -1 */id: ST = new ST(this.depth.peekDown());
    /** -2 */text: ST = new ST(this.depth.peekDown());
    /** -3 */coding_system_name: ST = new ST(this.depth.peekDown());
    /** -4 */alternate_id: ST = new ST(this.depth.peekDown());
    /** -5 */alternate_text: ST = new ST(this.depth.peekDown());
    /** -6 */alternate_coding_system_name: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.id,
        this.text,
        this.coding_system_name,
        this.alternate_id,
        this.alternate_text,
        this.alternate_coding_system_name,
    ]
}