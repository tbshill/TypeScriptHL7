"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class ACC extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        this.accident_datetime = new datatypes_1.TS(this.depth.peekDown());
        this.accident_code = new datatypes_1.CE(this.depth.peekDown());
        this.accident_location = new datatypes_1.ST(this.depth.peekDown());
        this.auto_accident_sate = new datatypes_1.CE(this.depth.peekDown());
        this.accident_job_related_indicator = new datatypes_1.ID(this.depth.peekDown());
        this.accident_death_indicator = new datatypes_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.accident_datetime,
            this.accident_code,
            this.accident_location,
            this.auto_accident_sate,
            this.accident_job_related_indicator,
            this.accident_death_indicator,
        ];
    }
}
exports.ACC = ACC;
