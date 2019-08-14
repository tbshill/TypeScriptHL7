import { HL7Obj } from '../base/HL7Obj';
import { ST, SI, CE, CX, XON, XAD, XPN, XTN, DT, IS, TS, ID, XCN, NM, CP, Z_AI } from '../datatypes';
import { DepthEnum, Depth } from '../base/depth';

export class IN1 extends HL7Obj {
    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }

    /** IN1-0*/segment: ST = new ST(this.depth.peekDown());
    /** IN1-1*/set_id: SI = new SI(this.depth.peekDown());
    /** IN1-2*/insurance_plan_id: CE = new CE(this.depth.peekDown());
    /** IN1-3*/insurance_company_id: CX = new CX(this.depth.peekDown());
    /** IN1-4*/insurance_company_name: XON = new XON(this.depth.peekDown());
    /** IN1-5*/insurance_company_address: XAD = new XAD(this.depth.peekDown());
    /** IN1-6*/insurance_company_contact_person: XPN = new XPN(this.depth.peekDown());
    /** IN1-7*/insurance_company_contact_phone: XTN = new XTN(this.depth.peekDown());
    /** IN1-8*/group_number: ST = new ST(this.depth.peekDown());
    /** IN1-9*/group_name: XON = new XON(this.depth.peekDown());
    /** IN1-10*/insured_group_employee_id: CX = new CX(this.depth.peekDown());
    /** IN1-11*/insured_group_employee_name: XON = new XON(this.depth.peekDown());
    /** IN1-12*/plan_effecitve_date: DT = new DT(this.depth.peekDown());
    /** IN1-13*/plan_expiration_date: DT = new DT(this.depth.peekDown());
    /** IN1-14*/authorization_information: Z_AI = new Z_AI(this.depth.peekDown());
    /** IN1-15*/plan_type: IS = new IS(this.depth.peekDown());
    /** IN1-16*/name_of_insured: XPN = new XPN(this.depth.peekDown());
    /** IN1-17*/insured_ralationship_to_patient: IS = new IS(this.depth.peekDown());
    /** IN1-18*/insured_date_of_birth: TS = new TS(this.depth.peekDown());
    /** IN1-19*/insured_address: XAD = new XAD(this.depth.peekDown());
    /** IN1-20*/assignment_of_benefits: IS = new IS(this.depth.peekDown());
    /** IN1-21*/coordination_of_benefits: IS = new IS(this.depth.peekDown());
    /** IN1-22*/coordination_of_benefits_priority: ST = new ST(this.depth.peekDown());
    /** IN1-23*/notice_of_admission_flag: ID = new ID(this.depth.peekDown());
    /** IN1-24*/notice_of_admission_date: DT = new DT(this.depth.peekDown());
    /** IN1-25*/report_of_eligibility_flag: ID = new ID(this.depth.peekDown());
    /** IN1-26*/report_of_eligibility_date: DT = new DT(this.depth.peekDown());
    /** IN1-27*/release_information_code: IS = new IS(this.depth.peekDown());
    /** IN1-28*/preadmit_cert: ST = new ST(this.depth.peekDown());
    /** IN1-29*/verification_datetime: TS = new TS(this.depth.peekDown());
    /** IN1-30*/verification_by: XCN = new XCN(this.depth.peekDown());
    /** IN1-31*/type_of_agreement_code: IS = new IS(this.depth.peekDown());
    /** IN1-32*/billing_status: IS = new IS(this.depth.peekDown());
    /** IN1-33*/lifetime_reserve_days: NM = new NM(this.depth.peekDown());
    /** IN1-34*/delay_before_LR_day: NM = new NM(this.depth.peekDown());
    /** IN1-35*/company_plan_code: IS = new IS(this.depth.peekDown());
    /** IN1-36*/policy_number: ST = new ST(this.depth.peekDown());
    /** IN1-37*/policy_deductible: CP = new CP(this.depth.peekDown());
    /** IN1-38*/policy_limit_amount: CP = new CP(this.depth.peekDown());
    /** IN1-39*/policy_limit_days: NM = new NM(this.depth.peekDown());
    /** IN1-40*/room_rate_semi_private: CP = new CP(this.depth.peekDown());
    /** IN1-41*/room_rate_private: CP = new CP(this.depth.peekDown());
    /** IN1-42*/insured_employment_status: CE = new CE(this.depth.peekDown());
    /** IN1-43*/insured_sex: IS = new IS(this.depth.peekDown());
    /** IN1-44*/insured_employer_address: XAD = new XAD(this.depth.peekDown());
    /** IN1-45*/verification_status: ST = new ST(this.depth.peekDown());
    /** IN1-46*/prior_insurance_plan_id: IS = new IS(this.depth.peekDown());
    /** IN1-47*/converage_type: IS = new IS(this.depth.peekDown());
    /** IN1-48*/handicap: IS = new IS(this.depth.peekDown());
    /** IN1-49*/insured_id: CX = new CX(this.depth.peekDown());

    hl7_obj_array = [
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
    ]

}