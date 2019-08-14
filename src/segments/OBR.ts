import { HL7Obj } from '../base/HL7Obj';
import { ST, SI, EI, CE, ID, TS, CQ, XCN, XTN, TQ, NM, Z_CU, Z_PA, Z_PR, Z_CP, Z_SS } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';

export class OBR extends HL7Obj {

    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }

    /** OBR-0 */segment: ST = new ST(this.depth.peekDown());
    /** OBR-1 */set_id: SI = new SI(this.depth.peekDown())
    /** OBR-2 */placer_order_number: EI = new EI(this.depth.peekDown());
    /** OBR-3 */filler_order_number: EI = new EI(this.depth.peekDown());
    /** OBR-4 */universal_service_id: CE = new CE(this.depth.peekDown());
    /** OBR-5 */priority: ID = new ID(this.depth.peekDown());
    /** OBR-6 */requested_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-7 */observation_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-8 */observation_end_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-9 */collection_volume: CQ = new CQ(this.depth.peekDown());
    /** OBR-10 */collector_id: XCN = new XCN(this.depth.peekDown());
    /** OBR-11 */specimen_action_code: ID = new ID(this.depth.peekDown());
    /** OBR-12 */danger_code: CE = new CE(this.depth.peekDown());
    /** OBR-13 */relevant_clinical_info: ST = new ST(this.depth.peekDown());
    /** OBR-14 */specimen_recieved_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-15 */specimen_source: Z_SS = new Z_SS(this.depth.peekDown());
    /** OBR-16 */ordering_provider: XCN = new XCN(this.depth.peekDown());
    /** OBR-17 */order_callback_number: XTN = new XTN(this.depth.peekDown());
    /** OBR-18 */placer_field_1: ST = new ST(this.depth.peekDown());
    /** OBR-19 */placer_field_2: ST = new ST(this.depth.peekDown());
    /** OBR-20 */filler_field_1: ST = new ST(this.depth.peekDown());
    /** OBR-21 */filler_field_2: ST = new ST(this.depth.peekDown());
    /** OBR-22 */results_change_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-23 */charge_to_practice: Z_CP = new Z_CP(this.depth.peekDown());
    /** OBR-24 */diagnostic_service_section_id: ID = new ID(this.depth.peekDown());
    /** OBR-25 */result_status: ID = new ID(this.depth.peekDown());
    /** OBR-26 */parent_result: Z_PR = new Z_PR(this.depth.peekDown());
    /** OBR-27 */quantity_timing: TQ = new TQ(this.depth.peekDown());
    /** OBR-28 */result_copies_to: XCN = new XCN(this.depth.peekDown());
    /** OBR-29 */parent: Z_PA = new Z_PA(this.depth.peekDown());
    /** OBR-30 */transportation_mode: ID = new ID(this.depth.peekDown());
    /** OBR-31 */reason_for_study: CE = new CE(this.depth.peekDown());
    /** OBR-32 */principal_result_interpreter: Z_CU = new Z_CU(this.depth.peekDown())
    /** OBR-33 */assistant_result_interpreter: Z_CU = new Z_CU(this.depth.peekDown())
    /** OBR-34 */technician: Z_CU = new Z_CU(this.depth.peekDown())
    /** OBR-35 */transcriptionist: Z_CU = new Z_CU(this.depth.peekDown())
    /** OBR-36 */scheduled_datetime: TS = new TS(this.depth.peekDown());
    /** OBR-37 */number_of_sample_containers: NM = new NM(this.depth.peekDown());
    /** OBR-38 */transport_logistics_of_sample: CE = new CE(this.depth.peekDown());
    /** OBR-39 */collectors_comments: CE = new CE(this.depth.peekDown());
    /** OBR-40 */transport_arrangement_responsibility: CE = new CE(this.depth.peekDown());
    /** OBR-41 */transport_arranged: ID = new ID(this.depth.peekDown());
    /** OBR-42 */esccort_required: ID = new ID(this.depth.peekDown());
    /** OBR-43 */planned_patient_transport_comment: CE = new CE(this.depth.peekDown());

    // I think these are part of a different HL7 version

    /** OBR-44 */procedure_code: ST = new ST(this.depth.peekDown());
    /** OBR-45 */procedure_code_modifier: ST = new ST(this.depth.peekDown());
    /** OBR-46 */placer_supplemental_service_info: ST = new ST(this.depth.peekDown());
    /** OBR-47 */filler_supplemental_service_info: ST = new ST(this.depth.peekDown());
    /** OBR-48 */medically_necessary_duplicate_procedure_reason: ST = new ST(this.depth.peekDown());
    /** OBR-49 */result_handling: ST = new ST(this.depth.peekDown());
    /** OBR-50 */parent_universal_service_id: ST = new ST(this.depth.peekDown());
    /** OBR-51 */observation_group_id: ST = new ST(this.depth.peekDown());
    /** OBR-52 */parent_observation_group_id: ST = new ST(this.depth.peekDown());
    /** OBR-53 */alternate_placer_order_number: ST = new ST(this.depth.peekDown());
    /** OBR-54 */parent_order: ST = new ST(this.depth.peekDown());

    hl7_obj_array = [
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
    ]

}