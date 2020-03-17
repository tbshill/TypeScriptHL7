"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class MSA extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** MSA-0 */ this.segment = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-1 */ this.ack_code = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-2 */ this.message_control_id = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-3 */ this.text_message = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-4 */ this.expected_sequence = new datatypes_1.NM(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-5 */ this.delayed_ack_type = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-6 */ this.error_condition = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        this.hl7_obj_array = [
            this.segment,
            this.ack_code,
            this.message_control_id,
            this.text_message,
            this.expected_sequence,
            this.delayed_ack_type,
            this.error_condition
        ];
    }
}
exports.MSA = MSA;
