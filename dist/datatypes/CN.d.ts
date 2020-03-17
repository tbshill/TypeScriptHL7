import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { HD } from './HD';
import { IS } from './IS';
export declare class CN extends HL7Obj {
    id: ST;
    family_name: ST;
    given_name: ST;
    middle_name: ST;
    suffix: ST;
    prefix: ST;
    degree: ST;
    source_table: IS;
    assigning_authority: HD;
    hl7_obj_array: (ST | IS | HD)[];
}
