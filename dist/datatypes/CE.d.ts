import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
export declare class CE extends HL7Obj {
    /** -1 */ id: ST;
    /** -2 */ text: ST;
    /** -3 */ coding_system_name: ST;
    /** -4 */ alternate_id: ST;
    /** -5 */ alternate_text: ST;
    /** -6 */ alternate_coding_system_name: ST;
    hl7_obj_array: ST[];
}
