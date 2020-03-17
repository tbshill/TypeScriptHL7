import { HL7Obj } from '../base/HL7Obj';
import { NM } from './NM';
import { ID } from './ID';
export declare class MO extends HL7Obj {
    quantity: NM;
    denomination: ID;
    hl7_obj_array: (ID | NM)[];
}
