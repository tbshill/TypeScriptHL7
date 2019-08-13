import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, NM, CE } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';

export class MSA extends HL7Obj {
    /** MSA-0 */segment = new ST(new Depth(DepthEnum.FEILD));
    /** MSA-1 */ack_code: ID = new ID(new Depth(DepthEnum.FEILD));
    /** MSA-2 */message_control_id: ST = new ST(new Depth(DepthEnum.FEILD));
    /** MSA-3 */text_message: ST = new ST(new Depth(DepthEnum.FEILD));
    /** MSA-4 */expected_sequence: NM = new NM(new Depth(DepthEnum.FEILD));
    /** MSA-5 */delayed_ack_type: ID = new ST(new Depth(DepthEnum.FEILD));
    /** MSA-6 */error_condition: CE = new CE(new Depth(DepthEnum.FEILD));

    hl7_obj_array = [
        this.ack_code,
        this.message_control_id,
        this.text_message,
        this.expected_sequence,
        this.delayed_ack_type,
        this.error_condition
    ]
}