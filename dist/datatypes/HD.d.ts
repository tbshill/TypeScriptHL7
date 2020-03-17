import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, IS } from '.';
export declare class HD extends HL7Obj {
    /** 1*/ namespace_id: IS;
    /** 1*/ universal_id: ST;
    /** 1*/ universal_id_type: ID;
    hl7_obj_array: (ST | IS | ID)[];
}
