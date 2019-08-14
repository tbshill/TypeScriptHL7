import { HL7Obj } from '../base/HL7Obj';
import { ST, SI, ID, CE, NM, TS, XCN } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';

export class OBX extends HL7Obj {

    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }

    segment: ST = new ST(this.depth.peekDown());
    set_id: SI = new SI(this.depth.peekDown());
    value_type: ID = new ID(this.depth.peekDown());
    observation_id: CE = new CE(this.depth.peekDown());
    observation_sub_id: ST = new ST(this.depth.peekDown());
    observation_value: ST = new ST(this.depth.peekDown());
    units: CE = new CE(this.depth.peekDown());
    references_range: ST = new ST(this.depth.peekDown());
    abnormal_flags: ID = new ID(this.depth.peekDown());
    probability: NM = new NM(this.depth.peekDown());
    nature_of_abnormal_test: ID = new ID(this.depth.peekDown());
    observation_result_status: ID = new ID(this.depth.peekDown());
    date_last_observed_normal_values: TS = new TS(this.depth.peekDown());
    user_defined_access_checks: ST = new ST(this.depth.peekDown());
    observation_datetime: TS = new TS(this.depth.peekDown());
    producer_id: CE = new CE(this.depth.peekDown());
    responsible_observer: XCN = new XCN(this.depth.peekDown());
    observation_method: CE = new CE(this.depth.peekDown());

    hl7_obj_array = [
        this.segment,
        this.set_id,
        this.value_type,
        this.observation_id,
        this.observation_sub_id,
        this.observation_value,
        this.units,
        this.references_range,
        this.abnormal_flags,
        this.probability,
        this.nature_of_abnormal_test,
        this.observation_result_status,
        this.date_last_observed_normal_values,
        this.user_defined_access_checks,
        this.observation_datetime,
        this.producer_id,
        this.responsible_observer,
        this.observation_method,
    ]
}