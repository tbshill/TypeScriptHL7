import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { IS } from './IS';
export declare class XPN extends HL7Obj {
    family: ST;
    given: ST;
    middle: ST;
    suffix: ST;
    prefix: ST;
    degree: ST;
    name_type_code: IS;
    hl7_obj_array: (ST | IS)[];
}
