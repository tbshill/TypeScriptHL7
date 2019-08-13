import { HL7Obj } from '../../base/HL7Obj';
import { ST } from '../ST';
/**
 * CM for MSH-8 <message type>
 */
export class Z_MT extends HL7Obj {
    event: ST = new ST(this.depth.peekDown());
    trigger: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
        this.event,
        this.trigger
    ]
}