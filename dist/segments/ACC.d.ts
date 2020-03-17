import { HL7Obj } from '../base/HL7Obj';
import { TS, CE, ST, ID } from '../datatypes';
export declare class ACC extends HL7Obj {
    constructor();
    accident_datetime: TS;
    accident_code: CE;
    accident_location: ST;
    auto_accident_sate: CE;
    accident_job_related_indicator: ID;
    accident_death_indicator: ID;
    hl7_obj_array: (ST | ID | TS | CE)[];
}
