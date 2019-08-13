import { HL7Obj } from '../base/HL7Obj';
import { HD } from './HD';
import { ID } from './ID';
import { NM } from './NM';

//<ID number (NM)> ^ <check digit (NM)> ^ <code identifying the check digit scheme employed (ID)> ^ < assigning authority (HD)>

export class CX extends HL7Obj {
    id: NM = new NM(this.depth.peekDown());
    check_digit: NM = new NM(this.depth.peekDown());
    code_for_check_digit: ID = new ID(this.depth.peekDown());
    assigning_authority: HD = new HD(this.depth.peekDown());

    hl7_obj_array = [
        this.id,
        this.check_digit,
        this.code_for_check_digit,
        this.assigning_authority
    ]
}