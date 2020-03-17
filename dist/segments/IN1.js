"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class IN1 extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** IN1-0*/ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-1*/ this.set_id = new datatypes_1.SI(this.depth.peekDown());
        /** IN1-2*/ this.insurance_plan_id = new datatypes_1.CE(this.depth.peekDown());
        /** IN1-3*/ this.insurance_company_id = new datatypes_1.CX(this.depth.peekDown());
        /** IN1-4*/ this.insurance_company_name = new datatypes_1.XON(this.depth.peekDown());
        /** IN1-5*/ this.insurance_company_address = new datatypes_1.XAD(this.depth.peekDown());
        /** IN1-6*/ this.insurance_company_contact_person = new datatypes_1.XPN(this.depth.peekDown());
        /** IN1-7*/ this.insurance_company_contact_phone = new datatypes_1.XTN(this.depth.peekDown());
        /** IN1-8*/ this.group_number = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-9*/ this.group_name = new datatypes_1.XON(this.depth.peekDown());
        /** IN1-10*/ this.insured_group_employee_id = new datatypes_1.CX(this.depth.peekDown());
        /** IN1-11*/ this.insured_group_employee_name = new datatypes_1.XON(this.depth.peekDown());
        /** IN1-12*/ this.plan_effecitve_date = new datatypes_1.DT(this.depth.peekDown());
        /** IN1-13*/ this.plan_expiration_date = new datatypes_1.DT(this.depth.peekDown());
        /** IN1-14*/ this.authorization_information = new datatypes_1.Z_AI(this.depth.peekDown());
        /** IN1-15*/ this.plan_type = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-16*/ this.name_of_insured = new datatypes_1.XPN(this.depth.peekDown());
        /** IN1-17*/ this.insured_ralationship_to_patient = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-18*/ this.insured_date_of_birth = new datatypes_1.TS(this.depth.peekDown());
        /** IN1-19*/ this.insured_address = new datatypes_1.XAD(this.depth.peekDown());
        /** IN1-20*/ this.assignment_of_benefits = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-21*/ this.coordination_of_benefits = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-22*/ this.coordination_of_benefits_priority = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-23*/ this.notice_of_admission_flag = new datatypes_1.ID(this.depth.peekDown());
        /** IN1-24*/ this.notice_of_admission_date = new datatypes_1.DT(this.depth.peekDown());
        /** IN1-25*/ this.report_of_eligibility_flag = new datatypes_1.ID(this.depth.peekDown());
        /** IN1-26*/ this.report_of_eligibility_date = new datatypes_1.DT(this.depth.peekDown());
        /** IN1-27*/ this.release_information_code = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-28*/ this.preadmit_cert = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-29*/ this.verification_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** IN1-30*/ this.verification_by = new datatypes_1.XCN(this.depth.peekDown());
        /** IN1-31*/ this.type_of_agreement_code = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-32*/ this.billing_status = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-33*/ this.lifetime_reserve_days = new datatypes_1.NM(this.depth.peekDown());
        /** IN1-34*/ this.delay_before_LR_day = new datatypes_1.NM(this.depth.peekDown());
        /** IN1-35*/ this.company_plan_code = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-36*/ this.policy_number = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-37*/ this.policy_deductible = new datatypes_1.CP(this.depth.peekDown());
        /** IN1-38*/ this.policy_limit_amount = new datatypes_1.CP(this.depth.peekDown());
        /** IN1-39*/ this.policy_limit_days = new datatypes_1.NM(this.depth.peekDown());
        /** IN1-40*/ this.room_rate_semi_private = new datatypes_1.CP(this.depth.peekDown());
        /** IN1-41*/ this.room_rate_private = new datatypes_1.CP(this.depth.peekDown());
        /** IN1-42*/ this.insured_employment_status = new datatypes_1.CE(this.depth.peekDown());
        /** IN1-43*/ this.insured_sex = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-44*/ this.insured_employer_address = new datatypes_1.XAD(this.depth.peekDown());
        /** IN1-45*/ this.verification_status = new datatypes_1.ST(this.depth.peekDown());
        /** IN1-46*/ this.prior_insurance_plan_id = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-47*/ this.converage_type = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-48*/ this.handicap = new datatypes_1.IS(this.depth.peekDown());
        /** IN1-49*/ this.insured_id = new datatypes_1.CX(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.insurance_plan_id,
            this.insurance_company_id,
            this.insurance_company_name,
            this.insurance_company_address,
            this.insurance_company_contact_person,
            this.insurance_company_contact_phone,
            this.group_number,
            this.group_name,
            this.insured_group_employee_id,
            this.insured_group_employee_name,
            this.plan_effecitve_date,
            this.plan_expiration_date,
            this.authorization_information,
            this.plan_type,
            this.name_of_insured,
            this.insured_ralationship_to_patient,
            this.insured_date_of_birth,
            this.insured_address,
            this.assignment_of_benefits,
            this.coordination_of_benefits,
            this.coordination_of_benefits_priority,
            this.notice_of_admission_flag,
            this.notice_of_admission_date,
            this.report_of_eligibility_flag,
            this.report_of_eligibility_date,
            this.release_information_code,
            this.preadmit_cert,
            this.verification_datetime,
            this.verification_by,
            this.type_of_agreement_code,
            this.billing_status,
            this.lifetime_reserve_days,
            this.delay_before_LR_day,
            this.company_plan_code,
            this.policy_number,
            this.policy_deductible,
            this.policy_limit_amount,
            this.policy_limit_days,
            this.room_rate_semi_private,
            this.room_rate_private,
            this.insured_employment_status,
            this.insured_sex,
            this.insured_employer_address,
            this.verification_status,
            this.prior_insurance_plan_id,
            this.converage_type,
            this.handicap,
            this.insured_id,
        ];
    }
}
exports.IN1 = IN1;
