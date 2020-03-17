"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
const XPN_1 = require("../datatypes/XPN");
class PID extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** PID-0 */ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /** PID-1 */ this.set_id = new datatypes_1.SI(this.depth.peekDown());
        /** PID-2 */ this.external_id = new datatypes_1.CX(this.depth.peekDown());
        /** PID-3 */ this.internal_id = new datatypes_1.CX(this.depth.peekDown());
        /** PID-4 */ this.alternate_id = new datatypes_1.CX(this.depth.peekDown());
        /** PID-5 */ this.patient_name = new XPN_1.XPN(this.depth.peekDown());
        /** PID-6 */ this.mothers_maiden_name = new XPN_1.XPN(this.depth.peekDown());
        /** PID-7 */ this.datetime_of_birth = new datatypes_1.TS(this.depth.peekDown());
        /** PID-8 */ this.sex = new datatypes_1.IS(this.depth.peekDown());
        /** PID-9 */ this.patient_alias = new XPN_1.XPN(this.depth.peekDown());
        /** PID-10 */ this.race = new datatypes_1.IS(this.depth.peekDown());
        /** PID-11 */ this.patient_address = new datatypes_1.XAD(this.depth.peekDown());
        /** PID-12 */ this.country_code = new datatypes_1.IS(this.depth.peekDown());
        /** PID-13 */ this.phone_home = new datatypes_1.XTN(this.depth.peekDown());
        /** PID-14 */ this.phone_business = new datatypes_1.XTN(this.depth.peekDown());
        /** PID-15 */ this.primary_language = new datatypes_1.CE(this.depth.peekDown());
        /** PID-16 */ this.marital_status = new datatypes_1.IS(this.depth.peekDown());
        /** PID-17 */ this.religion = new datatypes_1.IS(this.depth.peekDown());
        /** PID-18 */ this.account_number = new datatypes_1.CX(this.depth.peekDown());
        /** PID-19 */ this.ssn = new datatypes_1.ST(this.depth.peekDown());
        /** PID-20 */ this.drivers_license = new datatypes_1.DLN(this.depth.peekDown());
        /** PID-21 */ this.mothers_id = new datatypes_1.CX(this.depth.peekDown());
        /** PID-22 */ this.ethnic_group = new datatypes_1.IS(this.depth.peekDown());
        /** PID-23 */ this.birth_place = new datatypes_1.ST(this.depth.peekDown());
        /** PID-24 */ this.multiple_birth_indicator = new datatypes_1.ID(this.depth.peekDown());
        /** PID-25 */ this.birth_order = new datatypes_1.NM(this.depth.peekDown());
        /** PID-26 */ this.citizenship = new datatypes_1.IS(this.depth.peekDown());
        /** PID-27 */ this.veterans_military_status = new datatypes_1.CE(this.depth.peekDown());
        /** PID-28 */ this.nationality = new datatypes_1.CE(this.depth.peekDown());
        /** PID-29 */ this.death_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** PID-30 */ this.death_indicator = new datatypes_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.external_id,
            this.internal_id,
            this.alternate_id,
            this.patient_name,
            this.mothers_maiden_name,
            this.datetime_of_birth,
            this.sex,
            this.patient_alias,
            this.race,
            this.patient_address,
            this.country_code,
            this.phone_home,
            this.phone_business,
            this.primary_language,
            this.marital_status,
            this.religion,
            this.account_number,
            this.ssn,
            this.drivers_license,
            this.mothers_id,
            this.ethnic_group,
            this.birth_place,
            this.multiple_birth_indicator,
            this.birth_order,
            this.citizenship,
            this.veterans_military_status,
            this.nationality,
            this.death_datetime,
            this.death_indicator,
        ];
    }
}
exports.PID = PID;
