"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const HD_1 = require("./HD");
const ID_1 = require("./ID");
const NM_1 = require("./NM");
//<ID number (NM)> ^ <check digit (NM)> ^ <code identifying the check digit scheme employed (ID)> ^ < assigning authority (HD)>
class CX extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.id = new NM_1.NM(this.depth.peekDown());
        this.check_digit = new NM_1.NM(this.depth.peekDown());
        this.code_for_check_digit = new ID_1.ID(this.depth.peekDown());
        this.assigning_authority = new HD_1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.check_digit,
            this.code_for_check_digit,
            this.assigning_authority
        ];
    }
}
exports.CX = CX;
