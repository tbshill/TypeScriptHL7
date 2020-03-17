"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const IS_1 = require("../IS");
const TS_1 = require("../TS");
/**
 * CM for PV1 discharged_to_location
 */
class Z_DL extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.discharge_location = new IS_1.IS(this.depth.peekDown());
        this.effective_date = new TS_1.TS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.discharge_location,
            this.effective_date
        ];
    }
}
exports.Z_DL = Z_DL;
