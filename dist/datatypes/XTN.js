"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const _1 = require(".");
//In Version 2.3, replaces the TN data type. [NNN] [(999)]999-9999 [X99999] [B99999] [C any text] ^ <telecommunication use code (ID)> ^ <telecommunication equipment type (ID)> ^ <email address (ST)> ^ <country code (NM)> ^ <area/city code (NM)> ^ <phone number (NM)> ^ <extension (NM)> ^ <any text (ST)>
class XTN extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.validated_number = new _1.ST(this.depth.peekDown());
        this.telecom_use_code = new _1.ID(this.depth.peekDown());
        this.telecom_equipment_type = new _1.ID(this.depth.peekDown());
        this.email = new _1.ST(this.depth.peekDown());
        this.country_code = new _1.NM(this.depth.peekDown());
        this.area_code = new _1.NM(this.depth.peekDown());
        this.phone_number = new _1.NM(this.depth.peekDown());
        this.extension = new _1.NM(this.depth.peekDown());
        this.text = new _1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.validated_number,
            this.telecom_use_code,
            this.telecom_equipment_type,
            this.email,
            this.country_code,
            this.area_code,
            this.phone_number,
            this.extension,
            this.text,
        ];
    }
    validatePhoneNumber(input) {
        return true; // TODO: Fix Me
    }
}
exports.XTN = XTN;
