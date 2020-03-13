import { HL7Obj } from '../base/HL7Obj';
import { TS, CE, ST, ID, } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';

export class ACC extends HL7Obj {
    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }

    accident_datetime: TS = new TS(this.depth.peekDown());
    accident_code: CE = new CE(this.depth.peekDown());
    accident_location: ST = new ST(this.depth.peekDown());
    auto_accident_sate: CE = new CE(this.depth.peekDown());
    accident_job_related_indicator: ID = new ID(this.depth.peekDown());
    accident_death_indicator: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.accident_datetime,
        this.accident_code,
        this.accident_location,
        this.auto_accident_sate,
        this.accident_job_related_indicator,
        this.accident_death_indicator,
    ]
}