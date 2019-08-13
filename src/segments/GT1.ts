import { HL7Obj } from '../base/HL7Obj';
import { ST, CX, SI, XAD, XTN, TS, IS, NM, ID, CE, XON, XPN } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';
import { DT } from '../datatypes/DT';
// gaurentor
export class GT1 extends HL7Obj {
    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }

    /** GT1-0*/segment: ST = new ST(this.depth.peekDown());
    /** GT1-1*/set_id: SI = new SI(this.depth.peekDown());
    /** GT1-2*/gaurantor_number: CX = new CX(this.depth.peekDown());
    /** GT1-3*/gaurentor_name: XPN = new XPN(this.depth.peekDown());
    /** GT1-4*/gaurentor_spouse_name: XPN = new XPN(this.depth.peekDown());
    /** GT1-5*/gaurentor_address: XAD = new XAD(this.depth.peekDown());
    /** GT1-6*/gaurentor_phone_home: XTN = new XTN(this.depth.peekDown());
    /** GT1-7*/gaurentor_phone_business: XTN = new XTN(this.depth.peekDown());
    /** GT1-8*/gaurentor_dob: TS = new TS(this.depth.peekDown());
    /** GT1-9*/gaurentor_sex: IS = new IS(this.depth.peekDown());
    /** GT1-10*/gaurentor_type: IS = new IS(this.depth.peekDown());
    /** GT1-11*/gaurentor_relationship: SI = new SI(this.depth.peekDown());
    /** GT1-12*/gaurentor_ssn: ST = new ST(this.depth.peekDown());
    /** GT1-13*/gaurentor_date_begin: DT = new DT(this.depth.peekDown());
    /** GT1-14*/gaurentor_date_end: DT = new DT(this.depth.peekDown());
    /** GT1-15*/gaurentor_priority: NM = new NM(this.depth.peekDown());
    /** GT1-16*/guarentor_employer_name: XPN = new XPN(this.depth.peekDown());
    /** GT1-17*/guarentor_employer_address: XAD = new XAD(this.depth.peekDown());
    /** GT1-18*/guarentor_employer_phone: XTN = new XTN(this.depth.peekDown());
    /** GT1-19*/guarentor_employee_id: CX = new CX(this.depth.peekDown());
    /** GT1-20*/guarentor_employment_status: IS = new IS(this.depth.peekDown());
    /** GT1-21*/guarentor_organization_name: XON = new XON(this.depth.peekDown());
    /** GT1-22*/guarantor_billing_hold_flag: ID = new ID(this.depth.peekDown());
    /** GT1-23*/guarantor_credit_rating_code: CE = new CE(this.depth.peekDown());
    /** GT1-24*/guarantor_death_datetime: TS = new TS(this.depth.peekDown());
    /** GT1-25*/guarantor_death_flag: ID = new ID(this.depth.peekDown());
    /** GT1-26*/guarantor_charge_adjustment_code: CE = new CE(this.depth.peekDown());
    /** GT1-27*/guarantor_household_annual_income: CP = new CP(this.depth.peekDown());
    /** GT1-28*/guarantor_household_size: NM = new NM(this.depth.peekDown());
    /** GT1-29*/guarantor_employer_id: CX = new CX(this.depth.peekDown());
    /** GT1-30*/guarantor_marital_status_code: IS = new IS(this.depth.peekDown());
    /** GT1-31*/guarantor_hire_effective_date: DT = new DT(this.depth.peekDown());
    /** GT1-32*/employment_stop_date: DT = new DT(this.depth.peekDown());
    /** GT1-33*/living_dependency: IS = new IS(this.depth.peekDown());
    /** GT1-34*/ambulatory_status: IS = new IS(this.depth.peekDown());
    /** GT1-35*/citizenship: IS = new IS(this.depth.peekDown());
    /** GT1-36*/primary_language: CE = new CE(this.depth.peekDown());
    /** GT1-37*/living_arrangement: IS = new IS(this.depth.peekDown());
    /** GT1-38*/publicity_indicator: CE = new CE(this.depth.peekDown());
    /** GT1-39*/protection_indicator: ID = new ID(this.depth.peekDown());
    /** GT1-40*/student_indicator: IS = new IS(this.depth.peekDown());
    /** GT1-41*/religion: IS = new IS(this.depth.peekDown());
    /** GT1-42*/mothers_maiden_name: XPN = new XPN(this.depth.peekDown());
    /** GT1-43*/nationality: CE = new CE(this.depth.peekDown());
    /** GT1-44*/ethnic_group: IS = new IS(this.depth.peekDown());
    /** GT1-45*/contact_persons_name: XPN = new XPN(this.depth.peekDown());
    /** GT1-46*/contact_persons_phone: XTN = new XTN(this.depth.peekDown());
    /** GT1-47*/contact_reason: CE = new CE(this.depth.peekDown());
    /** GT1-48*/contact_relationship: IS = new IS(this.depth.peekDown());
    /** GT1-49*/job_title: ST = new ST(this.depth.peekDown());
    /** GT1-50*/job_code: JCC = new JCC(this.depth.peekDown());
    /** GT1-51*/guarantor_employers_organization_name: XON = new XON(this.depth.peekDown());
    /** GT1-52*/handicap: IS = new IS(this.depth.peekDown());
    /** GT1-53*/job_status: IS = new IS(this.depth.peekDown());
    /** GT1-54*/guarantor_financial_class: FC = new FC(this.depth.peekDown());
    /** GT1-55*/guarantor_race: IS = new IS(this.depth.peekDown());



    hl7_obj_array = [
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
    ]

}