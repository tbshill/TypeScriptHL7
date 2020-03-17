import { HL7Obj } from '../../base/HL7Obj';
import { CE } from '..';
import { TX } from '../TX';
import { ST } from '../ST';
/**
 * CM for OBR-26 -- parent_result
 */
export declare class Z_PR extends HL7Obj {
    observation_id_of_parent_result: CE;
    sub_id_of_parent_result: ST;
    result_from_parent: TX;
    hl7_obj_array: (ST | TX | CE)[];
}
