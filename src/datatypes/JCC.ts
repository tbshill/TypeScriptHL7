import { HL7Obj } from '../base/HL7Obj';
import { IS } from './IS';

export class JCC extends HL7Obj {
    job_code: IS = new IS(this.depth.peekDown());
    job_class: IS = new IS(this.depth.peekDown());

    hl7_obj_array = [
        this.job_code,
        this.job_class
    ]
}