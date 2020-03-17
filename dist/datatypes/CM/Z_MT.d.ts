import { HL7Obj } from '../../base/HL7Obj';
import { ST } from '../ST';
/**
 * CM for MSH-8 <message type>
 */
export declare class Z_MT extends HL7Obj {
    event: ST;
    trigger: ST;
    hl7_obj_array: ST[];
}
