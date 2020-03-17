"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
// gaurentor
class GT1 extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** GT1-0*/ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /** GT1-1*/ this.set_id = new datatypes_1.SI(this.depth.peekDown());
        /** GT1-2*/ this.gaurantor_number = new datatypes_1.CX(this.depth.peekDown());
        /** GT1-3*/ this.gaurentor_name = new datatypes_1.XPN(this.depth.peekDown());
        /** GT1-4*/ this.gaurentor_spouse_name = new datatypes_1.XPN(this.depth.peekDown());
        /** GT1-5*/ this.gaurentor_address = new datatypes_1.XAD(this.depth.peekDown());
        /** GT1-6*/ this.gaurentor_phone_home = new datatypes_1.XTN(this.depth.peekDown());
        /** GT1-7*/ this.gaurentor_phone_business = new datatypes_1.XTN(this.depth.peekDown());
        /** GT1-8*/ this.gaurentor_dob = new datatypes_1.TS(this.depth.peekDown());
        /** GT1-9*/ this.gaurentor_sex = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-10*/ this.gaurentor_type = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-11*/ this.gaurentor_relationship = new datatypes_1.SI(this.depth.peekDown());
        /** GT1-12*/ this.gaurentor_ssn = new datatypes_1.ST(this.depth.peekDown());
        /** GT1-13*/ this.gaurentor_date_begin = new datatypes_1.DT(this.depth.peekDown());
        /** GT1-14*/ this.gaurentor_date_end = new datatypes_1.DT(this.depth.peekDown());
        /** GT1-15*/ this.gaurentor_priority = new datatypes_1.NM(this.depth.peekDown());
        /** GT1-16*/ this.guarentor_employer_name = new datatypes_1.XPN(this.depth.peekDown());
        /** GT1-17*/ this.guarentor_employer_address = new datatypes_1.XAD(this.depth.peekDown());
        /** GT1-18*/ this.guarentor_employer_phone = new datatypes_1.XTN(this.depth.peekDown());
        /** GT1-19*/ this.guarentor_employee_id = new datatypes_1.CX(this.depth.peekDown());
        /** GT1-20*/ this.guarentor_employment_status = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-21*/ this.guarentor_organization_name = new datatypes_1.XON(this.depth.peekDown());
        /** GT1-22*/ this.guarantor_billing_hold_flag = new datatypes_1.ID(this.depth.peekDown());
        /** GT1-23*/ this.guarantor_credit_rating_code = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-24*/ this.guarantor_death_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** GT1-25*/ this.guarantor_death_flag = new datatypes_1.ID(this.depth.peekDown());
        /** GT1-26*/ this.guarantor_charge_adjustment_code = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-27*/ this.guarantor_household_annual_income = new datatypes_1.CP(this.depth.peekDown());
        /** GT1-28*/ this.guarantor_household_size = new datatypes_1.NM(this.depth.peekDown());
        /** GT1-29*/ this.guarantor_employer_id = new datatypes_1.CX(this.depth.peekDown());
        /** GT1-30*/ this.guarantor_marital_status_code = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-31*/ this.guarantor_hire_effective_date = new datatypes_1.DT(this.depth.peekDown());
        /** GT1-32*/ this.employment_stop_date = new datatypes_1.DT(this.depth.peekDown());
        /** GT1-33*/ this.living_dependency = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-34*/ this.ambulatory_status = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-35*/ this.citizenship = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-36*/ this.primary_language = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-37*/ this.living_arrangement = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-38*/ this.publicity_indicator = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-39*/ this.protection_indicator = new datatypes_1.ID(this.depth.peekDown());
        /** GT1-40*/ this.student_indicator = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-41*/ this.religion = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-42*/ this.mothers_maiden_name = new datatypes_1.XPN(this.depth.peekDown());
        /** GT1-43*/ this.nationality = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-44*/ this.ethnic_group = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-45*/ this.contact_persons_name = new datatypes_1.XPN(this.depth.peekDown());
        /** GT1-46*/ this.contact_persons_phone = new datatypes_1.XTN(this.depth.peekDown());
        /** GT1-47*/ this.contact_reason = new datatypes_1.CE(this.depth.peekDown());
        /** GT1-48*/ this.contact_relationship = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-49*/ this.job_title = new datatypes_1.ST(this.depth.peekDown());
        /** GT1-50*/ this.job_code = new datatypes_1.JCC(this.depth.peekDown());
        /** GT1-51*/ this.guarantor_employers_organization_name = new datatypes_1.XON(this.depth.peekDown());
        /** GT1-52*/ this.handicap = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-53*/ this.job_status = new datatypes_1.IS(this.depth.peekDown());
        /** GT1-54*/ this.guarantor_financial_class = new datatypes_1.FC(this.depth.peekDown());
        /** GT1-55*/ this.guarantor_race = new datatypes_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.gaurantor_number,
            this.gaurentor_name,
            this.gaurentor_spouse_name,
            this.gaurentor_address,
            this.gaurentor_phone_home,
            this.gaurentor_phone_business,
            this.gaurentor_dob,
            this.gaurentor_sex,
            this.gaurentor_type,
            this.gaurentor_relationship,
            this.gaurentor_ssn,
            this.gaurentor_date_begin,
            this.gaurentor_date_end,
            this.gaurentor_priority,
            this.guarentor_employer_name,
            this.guarentor_employer_address,
            this.guarentor_employer_phone,
            this.guarentor_employee_id,
            this.guarentor_employment_status,
            this.guarentor_organization_name,
            this.guarantor_billing_hold_flag,
            this.guarantor_credit_rating_code,
            this.guarantor_death_datetime,
            this.guarantor_death_flag,
            this.guarantor_charge_adjustment_code,
            this.guarantor_household_annual_income,
            this.guarantor_household_size,
            this.guarantor_employer_id,
            this.guarantor_marital_status_code,
            this.guarantor_hire_effective_date,
            this.employment_stop_date,
            this.living_dependency,
            this.ambulatory_status,
            this.citizenship,
            this.primary_language,
            this.living_arrangement,
            this.publicity_indicator,
            this.protection_indicator,
            this.student_indicator,
            this.religion,
            this.mothers_maiden_name,
            this.nationality,
            this.ethnic_group,
            this.contact_persons_name,
            this.contact_persons_phone,
            this.contact_reason,
            this.contact_relationship,
            this.job_title,
            this.job_code,
            this.guarantor_employers_organization_name,
            this.handicap,
            this.job_status,
            this.guarantor_financial_class,
            this.guarantor_race,
        ];
    }
}
exports.GT1 = GT1;
