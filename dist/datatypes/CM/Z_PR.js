"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const __1 = require("..");
const TX_1 = require("../TX");
const ST_1 = require("../ST");
/**
 * CM for OBR-26 -- parent_result
 */
class Z_PR extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.observation_id_of_parent_result = new __1.CE(this.depth.peekDown());
        this.sub_id_of_parent_result = new ST_1.ST(this.depth.peekDown());
        this.result_from_parent = new TX_1.TX(this.depth.peekDown());
        this.hl7_obj_array = [
            this.observation_id_of_parent_result,
            this.sub_id_of_parent_result,
            this.result_from_parent
        ];
    }
}
exports.Z_PR = Z_PR;
