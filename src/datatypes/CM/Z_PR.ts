import { HL7Obj } from '../../base/HL7Obj';

import { CE } from '..';
import { TX } from '../TX';
import { ST } from '../ST';

/**
 * CM for OBR-26 -- parent_result
 */
export class Z_PR extends HL7Obj {
    observation_id_of_parent_result: CE = new CE(this.depth.peekDown());
    sub_id_of_parent_result: ST = new ST(this.depth.peekDown());
    result_from_parent: TX = new TX(this.depth.peekDown())

    hl7_obj_array = [
        this.observation_id_of_parent_result,
        this.sub_id_of_parent_result,
        this.result_from_parent
    ]
}
