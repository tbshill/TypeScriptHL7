"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const ID_1 = require("./ID");
const HD_1 = require("./HD");
const _1 = require(".");
class XON extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        /** XON 1 */ this.organization_name = new ST_1.ST(this.depth.peekDown());
        /** XON 2 */ this.organization_name_type_code = new _1.IS(this.depth.peekDown());
        /** XON 3 */ this.id = new _1.NM(this.depth.peekDown());
        /** XON 4 */ this.check_digit = new _1.NM(this.depth.peekDown());
        /** XON 5 */ this.code_for_check_digit_schema = new ID_1.ID(this.depth.peekDown());
        /** XON 6 */ this.assigning_authority = new HD_1.HD(this.depth.peekDown());
        /** XON 7 */ this.id_type_code = new _1.IS(this.depth.peekDown());
        /** XON 8 */ this.assigning_facility = new HD_1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.organization_name,
            this.organization_name_type_code,
            this.id,
            this.check_digit,
            this.code_for_check_digit_schema,
            this.assigning_authority,
            this.id_type_code,
            this.assigning_facility,
        ];
    }
}
exports.XON = XON;
