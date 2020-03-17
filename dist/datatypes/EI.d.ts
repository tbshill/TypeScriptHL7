import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { IS } from './IS';
import { ID } from './ID';
export declare class EI extends HL7Obj {
    entity_id: ST;
    namespace_id: IS;
    universal_id: ST;
    universal_id_type: ID;
    hl7_obj_array: (ST | IS | ID)[];
}
