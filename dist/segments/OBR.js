"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
class OBR extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** OBR-0 */ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-1 */ this.set_id = new datatypes_1.SI(this.depth.peekDown());
        /** OBR-2 */ this.placer_order_number = new datatypes_1.EI(this.depth.peekDown());
        /** OBR-3 */ this.filler_order_number = new datatypes_1.EI(this.depth.peekDown());
        /** OBR-4 */ this.universal_service_id = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-5 */ this.priority = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-6 */ this.requested_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-7 */ this.observation_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-8 */ this.observation_end_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-9 */ this.collection_volume = new datatypes_1.CQ(this.depth.peekDown());
        /** OBR-10 */ this.collector_id = new datatypes_1.XCN(this.depth.peekDown());
        /** OBR-11 */ this.specimen_action_code = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-12 */ this.danger_code = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-13 */ this.relevant_clinical_info = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-14 */ this.specimen_recieved_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-15 */ this.specimen_source = new datatypes_1.Z_SS(this.depth.peekDown());
        /** OBR-16 */ this.ordering_provider = new datatypes_1.XCN(this.depth.peekDown());
        /** OBR-17 */ this.order_callback_number = new datatypes_1.XTN(this.depth.peekDown());
        /** OBR-18 */ this.placer_field_1 = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-19 */ this.placer_field_2 = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-20 */ this.filler_field_1 = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-21 */ this.filler_field_2 = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-22 */ this.results_change_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-23 */ this.charge_to_practice = new datatypes_1.Z_CP(this.depth.peekDown());
        /** OBR-24 */ this.diagnostic_service_section_id = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-25 */ this.result_status = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-26 */ this.parent_result = new datatypes_1.Z_PR(this.depth.peekDown());
        /** OBR-27 */ this.quantity_timing = new datatypes_1.TQ(this.depth.peekDown());
        /** OBR-28 */ this.result_copies_to = new datatypes_1.XCN(this.depth.peekDown());
        /** OBR-29 */ this.parent = new datatypes_1.Z_PA(this.depth.peekDown());
        /** OBR-30 */ this.transportation_mode = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-31 */ this.reason_for_study = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-32 */ this.principal_result_interpreter = new datatypes_1.XCN(this.depth.peekDown());
        /** OBR-33 */ this.assistant_result_interpreter = new datatypes_1.XCN(this.depth.peekDown());
        /** OBR-34 */ this.technician = new datatypes_1.XPN(this.depth.peekDown());
        /** OBR-35 */ this.transcriptionist = new datatypes_1.XPN(this.depth.peekDown());
        /** OBR-36 */ this.scheduled_datetime = new datatypes_1.TS(this.depth.peekDown());
        /** OBR-37 */ this.number_of_sample_containers = new datatypes_1.NM(this.depth.peekDown());
        /** OBR-38 */ this.transport_logistics_of_sample = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-39 */ this.collectors_comments = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-40 */ this.transport_arrangement_responsibility = new datatypes_1.CE(this.depth.peekDown());
        /** OBR-41 */ this.transport_arranged = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-42 */ this.esccort_required = new datatypes_1.ID(this.depth.peekDown());
        /** OBR-43 */ this.planned_patient_transport_comment = new datatypes_1.CE(this.depth.peekDown());
        // I think these are part of a different HL7 version
        /** OBR-44 */ this.procedure_code = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-45 */ this.procedure_code_modifier = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-46 */ this.placer_supplemental_service_info = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-47 */ this.filler_supplemental_service_info = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-48 */ this.medically_necessary_duplicate_procedure_reason = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-49 */ this.result_handling = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-50 */ this.parent_universal_service_id = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-51 */ this.observation_group_id = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-52 */ this.parent_observation_group_id = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-53 */ this.alternate_placer_order_number = new datatypes_1.ST(this.depth.peekDown());
        /** OBR-54 */ this.parent_order = new datatypes_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.segment,
            this.set_id,
            this.placer_order_number,
            this.filler_order_number,
            this.universal_service_id,
            this.priority,
            this.requested_datetime,
            this.observation_datetime,
            this.observation_end_datetime,
            this.collection_volume,
            this.collector_id,
            this.specimen_action_code,
            this.danger_code,
            this.relevant_clinical_info,
            this.specimen_recieved_datetime,
            this.specimen_source,
            this.ordering_provider,
            this.order_callback_number,
            this.placer_field_1,
            this.placer_field_2,
            this.filler_field_1,
            this.filler_field_2,
            this.results_change_datetime,
            this.charge_to_practice,
            this.diagnostic_service_section_id,
            this.result_status,
            this.parent_result,
            this.quantity_timing,
            this.result_copies_to,
            this.parent,
            this.transportation_mode,
            this.reason_for_study,
            this.principal_result_interpreter,
            this.assistant_result_interpreter,
            this.technician,
            this.transcriptionist,
            this.scheduled_datetime,
            this.number_of_sample_containers,
            this.transport_logistics_of_sample,
            this.collectors_comments,
            this.transport_arrangement_responsibility,
            this.transport_arranged,
            this.esccort_required,
            this.planned_patient_transport_comment,
            this.procedure_code,
            this.procedure_code_modifier,
            this.placer_supplemental_service_info,
            this.filler_supplemental_service_info,
            this.medically_necessary_duplicate_procedure_reason,
            this.result_handling,
            this.parent_universal_service_id,
            this.observation_group_id,
            this.parent_observation_group_id,
            this.alternate_placer_order_number,
            this.parent_order,
        ];
    }
}
exports.OBR = OBR;
