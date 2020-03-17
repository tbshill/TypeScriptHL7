"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class OBX extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.segment = new datatypes_1.ST(this.depth.peekDown());
        this.set_id = new datatypes_1.SI(this.depth.peekDown());
        this.value_type = new datatypes_1.ID(this.depth.peekDown());
        this.observation_id = new datatypes_1.CE(this.depth.peekDown());
        this.observation_sub_id = new datatypes_1.ST(this.depth.peekDown());
        this.observation_value = new datatypes_1.ST(this.depth.peekDown());
        this.units = new datatypes_1.CE(this.depth.peekDown());
        this.references_range = new datatypes_1.ST(this.depth.peekDown());
        this.abnormal_flags = new datatypes_1.ID(this.depth.peekDown());
        this.probability = new datatypes_1.NM(this.depth.peekDown());
        this.nature_of_abnormal_test = new datatypes_1.ID(this.depth.peekDown());
        this.observation_result_status = new datatypes_1.ID(this.depth.peekDown());
        this.date_last_observed_normal_values = new datatypes_1.TS(this.depth.peekDown());
        this.user_defined_access_checks = new datatypes_1.ST(this.depth.peekDown());
        this.observation_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.producer_id = new datatypes_1.CE(this.depth.peekDown());
        this.responsible_observer = new datatypes_1.XCN(this.depth.peekDown());
        this.observation_method = new datatypes_1.CE(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.value_type,
            this.observation_id,
            this.observation_sub_id,
            this.observation_value,
            this.units,
            this.references_range,
            this.abnormal_flags,
            this.probability,
            this.nature_of_abnormal_test,
            this.observation_result_status,
            this.date_last_observed_normal_values,
            this.user_defined_access_checks,
            this.observation_datetime,
            this.producer_id,
            this.responsible_observer,
            this.observation_method,
        ];
    }
}
exports.OBX = OBX;
