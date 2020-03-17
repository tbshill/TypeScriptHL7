"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class PV1 extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /**PV1-00*/ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /**PV1-01*/ this.set_ID = new datatypes_1.SI(this.depth.peekDown());
        /**PV1-02*/ this.patient_class = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-03*/ this.assigned_patient_location = new datatypes_1.PL(this.depth.peekDown());
        /**PV1-04*/ this.admission_type = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-05*/ this.preadmit_number = new datatypes_1.CX(this.depth.peekDown());
        /**PV1-06*/ this.prior_patient_location = new datatypes_1.PL(this.depth.peekDown());
        /**PV1-07*/ this.attending_doctor = new datatypes_1.XCN(this.depth.peekDown());
        /**PV1-08*/ this.referring_doctor = new datatypes_1.XCN(this.depth.peekDown());
        /**PV1-09*/ this.consulting_doctor = new datatypes_1.XCN(this.depth.peekDown());
        /**PV1-10*/ this.hospital_service = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-11 */ this.temporary_location = new datatypes_1.PL(this.depth.peekDown());
        /**PV1-12 */ this.predmit_test_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-13 */ this.readmission_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-14 */ this.admit_source = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-15 */ this.ambulatory_status = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-16 */ this.vip_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-17 */ this.admitting_doctor = new datatypes_1.XCN(this.depth.peekDown());
        /**PV1-18 */ this.patient_type = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-19 */ this.visit_number = new datatypes_1.CX(this.depth.peekDown());
        /**PV1-20 */ this.financial_class = new datatypes_1.FC(this.depth.peekDown());
        /**PV1-21 */ this.charge_price_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-22 */ this.courtesy_code = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-23 */ this.credit_rating = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-24 */ this.contract_code = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-25 */ this.contract_effective_date = new datatypes_1.DT(this.depth.peekDown());
        /**PV1-26 */ this.contract_amount = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-27 */ this.contract_period = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-28 */ this.interest_code = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-29 */ this.transfer_to_bad_debt_code = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-30 */ this.transfer_to_bad_debt_date = new datatypes_1.DT(this.depth.peekDown());
        /**PV1-31 */ this.bad_debt_agency_code = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-32 */ this.bad_debt_transfer_amount = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-33 */ this.bad_debt_recovery_amount = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-34 */ this.delete_account_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-35 */ this.delete_account_date = new datatypes_1.DT(this.depth.peekDown());
        /**PV1-36 */ this.discharge_disposition = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-37 */ this.discharged_to_location = new datatypes_1.Z_DL(this.depth.peekDown());
        /**PV1-38 */ this.diet_type = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-39 */ this.servicing_facility = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-40 */ this.bed_status = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-41 */ this.account_status = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-42 */ this.pending_location = new datatypes_1.PL(this.depth.peekDown());
        /**PV1-43 */ this.prior_temporary_location = new datatypes_1.PL(this.depth.peekDown());
        /**PV1-44 */ this.admit_date_time = new datatypes_1.TS(this.depth.peekDown());
        /**PV1-45 */ this.discharge_date_time = new datatypes_1.TS(this.depth.peekDown());
        /**PV1-46 */ this.current_patient_balance = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-47 */ this.total_charges = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-48 */ this.total_adjustments = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-49 */ this.total_payments = new datatypes_1.NM(this.depth.peekDown());
        /**PV1-50 */ this.alternate_visit_ID = new datatypes_1.CX(this.depth.peekDown());
        /**PV1-51 */ this.visit_indicator = new datatypes_1.IS(this.depth.peekDown());
        /**PV1-52 */ this.other_healthcare_provider = new datatypes_1.XCN(this.depth.peekDown());
        this.hl7_obj_array = [
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
}
exports.PV1 = PV1;
