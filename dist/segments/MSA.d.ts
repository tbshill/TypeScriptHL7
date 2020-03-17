import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, NM, CE } from '../datatypes';
export declare class MSA extends HL7Obj {
    constructor();
    /** MSA-0 */ segment: ST;
    /** MSA-1 */ ack_code: ID;
    /** MSA-2 */ message_control_id: ST;
    /** MSA-3 */ text_message: ST;
    /** MSA-4 */ expected_sequence: NM;
    /** MSA-5 */ delayed_ack_type: ID;
    /** MSA-6 */ error_condition: CE;
    hl7_obj_array: (ST | ID | CE | NM)[];
}
