import { HL7Obj } from "../base/HL7Obj";
import { ST, IS, PL, CX, XCN, FC, DT, NM, TS, SI, Z_DL } from "../datatypes";
import { Depth, DepthEnum } from "../base/depth";

export class PV1 extends HL7Obj {
    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }
  /**PV1-00*/ segment: ST = new ST(this.depth.peekDown());
  /**PV1-01*/ set_ID: SI = new SI(this.depth.peekDown());
  /**PV1-02*/ patient_class: IS = new IS(this.depth.peekDown());
  /**PV1-03*/ assigned_patient_location: PL = new PL(this.depth.peekDown());
  /**PV1-04*/ admission_type: IS = new IS(this.depth.peekDown());
  /**PV1-05*/ preadmit_number: CX = new CX(this.depth.peekDown());
  /**PV1-06*/ prior_patient_location: PL = new PL(this.depth.peekDown());
  /**PV1-07*/ attending_doctor: XCN = new XCN(this.depth.peekDown());
  /**PV1-08*/ referring_doctor: XCN = new XCN(this.depth.peekDown());
  /**PV1-09*/ consulting_doctor: XCN = new XCN(this.depth.peekDown());
  /**PV1-10*/ hospital_service: IS = new IS(this.depth.peekDown());
  /**PV1-11 */ temporary_location: PL = new PL(this.depth.peekDown());
  /**PV1-12 */ predmit_test_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-13 */ readmission_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-14 */ admit_source: IS = new IS(this.depth.peekDown());
  /**PV1-15 */ ambulatory_status: IS = new IS(this.depth.peekDown());
  /**PV1-16 */ vip_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-17 */ admitting_doctor: XCN = new XCN(this.depth.peekDown());
  /**PV1-18 */ patient_type: IS = new IS(this.depth.peekDown());
  /**PV1-19 */ visit_number: CX = new CX(this.depth.peekDown());
  /**PV1-20 */ financial_class: FC = new FC(this.depth.peekDown());
  /**PV1-21 */ charge_price_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-22 */ courtesy_code: IS = new IS(this.depth.peekDown());
  /**PV1-23 */ credit_rating: IS = new IS(this.depth.peekDown());
  /**PV1-24 */ contract_code: IS = new IS(this.depth.peekDown());
  /**PV1-25 */ contract_effective_date: DT = new DT(this.depth.peekDown());
  /**PV1-26 */ contract_amount: NM = new NM(this.depth.peekDown());
  /**PV1-27 */ contract_period: NM = new NM(this.depth.peekDown());
  /**PV1-28 */ interest_code: IS = new IS(this.depth.peekDown());
  /**PV1-29 */ transfer_to_bad_debt_code: IS = new IS(this.depth.peekDown());
  /**PV1-30 */ transfer_to_bad_debt_date: DT = new DT(this.depth.peekDown());
  /**PV1-31 */ bad_debt_agency_code: IS = new IS(this.depth.peekDown());
  /**PV1-32 */ bad_debt_transfer_amount: NM = new NM(this.depth.peekDown());
  /**PV1-33 */ bad_debt_recovery_amount: NM = new NM(this.depth.peekDown());
  /**PV1-34 */ delete_account_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-35 */ delete_account_date: DT = new DT(this.depth.peekDown());
  /**PV1-36 */ discharge_disposition: IS = new IS(this.depth.peekDown());
  /**PV1-37 */ discharged_to_location: Z_DL = new Z_DL(this.depth.peekDown());
  /**PV1-38 */ diet_type: IS = new IS(this.depth.peekDown());
  /**PV1-39 */ servicing_facility: IS = new IS(this.depth.peekDown());
  /**PV1-40 */ bed_status: IS = new IS(this.depth.peekDown());
  /**PV1-41 */ account_status: IS = new IS(this.depth.peekDown());
  /**PV1-42 */ pending_location: PL = new PL(this.depth.peekDown());
  /**PV1-43 */ prior_temporary_location: PL = new PL(this.depth.peekDown());
  /**PV1-44 */ admit_date_time: TS = new TS(this.depth.peekDown());
  /**PV1-45 */ discharge_date_time: TS = new TS(this.depth.peekDown());
  /**PV1-46 */ current_patient_balance: NM = new NM(this.depth.peekDown());
  /**PV1-47 */ total_charges: NM = new NM(this.depth.peekDown());
  /**PV1-48 */ total_adjustments: NM = new NM(this.depth.peekDown());
  /**PV1-49 */ total_payments: NM = new NM(this.depth.peekDown());
  /**PV1-50 */ alternate_visit_ID: CX = new CX(this.depth.peekDown());
  /**PV1-51 */ visit_indicator: IS = new IS(this.depth.peekDown());
  /**PV1-52 */ other_healthcare_provider: XCN = new XCN(this.depth.peekDown());

  hl7_obj_array = [
    this.segment,
    this.set_ID,
    this.patient_class,
    this.assigned_patient_location,
    this.admission_type,
    this.preadmit_number,
    this.prior_patient_location,
    this.attending_doctor,
    this.referring_doctor,
    this.consulting_doctor,
    this.hospital_service,
    this.temporary_location,
    this.predmit_test_indicator,
    this.readmission_indicator,
    this.admit_source,
    this.ambulatory_status,
    this.vip_indicator,
    this.admitting_doctor,
    this.patient_type,
    this.visit_number,
    this.financial_class,
    this.charge_price_indicator,
    this.courtesy_code,
    this.credit_rating,
    this.contract_code,
    this.contract_effective_date,
    this.contract_amount,
    this.contract_period,
    this.interest_code,
    this.transfer_to_bad_debt_code,
    this.transfer_to_bad_debt_date,
    this.bad_debt_agency_code,
    this.bad_debt_transfer_amount,
    this.bad_debt_recovery_amount,
    this.delete_account_indicator,
    this.delete_account_date,
    this.discharge_disposition,
    this.discharged_to_location,
    this.diet_type,
    this.servicing_facility,
    this.bed_status,
    this.account_status,
    this.pending_location,
    this.prior_temporary_location,
    this.admit_date_time,
    this.discharge_date_time,
    this.current_patient_balance,
    this.total_charges,
    this.total_adjustments,
    this.total_payments,
    this.alternate_visit_ID,
    this.visit_indicator,
    this.other_healthcare_provider
  ];
}
