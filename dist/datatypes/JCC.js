"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const IS_1 = require("./IS");
class JCC extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.job_code = new IS_1.IS(this.depth.peekDown());
        this.job_class = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.job_code,
            this.job_class
        ];
    }
}
exports.JCC = JCC;
