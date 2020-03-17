import { HL7Obj } from '../base/HL7Obj';
import { HD } from './HD';
import { ID } from './ID';
import { NM } from './NM';
export declare class CX extends HL7Obj {
    id: NM;
    check_digit: NM;
    code_for_check_digit: ID;
    assigning_authority: HD;
    hl7_obj_array: (ID | HD | NM)[];
}
