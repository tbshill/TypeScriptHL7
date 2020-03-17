import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { ID } from './ID';
import { HD } from './HD';
import { IS, NM } from '.';
export declare class XON extends HL7Obj {
    /** XON 1 */ organization_name: ST;
    /** XON 2 */ organization_name_type_code: IS;
    /** XON 3 */ id: NM;
    /** XON 4 */ check_digit: NM;
    /** XON 5 */ code_for_check_digit_schema: ID;
    /** XON 6 */ assigning_authority: HD;
    /** XON 7 */ id_type_code: IS;
    /** XON 8 */ assigning_facility: HD;
    hl7_obj_array: (ST | IS | ID | HD | NM)[];
}
