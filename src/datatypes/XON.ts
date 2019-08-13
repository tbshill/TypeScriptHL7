import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { ID } from './ID';
import { HD } from './HD';
import { IS, NM } from '.';

export class XON extends HL7Obj {
    /** XON 1 */organization_name: ST = new ST(this.depth.peekDown());
    /** XON 2 */organization_name_type_code: IS = new IS(this.depth.peekDown());
    /** XON 3 */id: NM = new NM(this.depth.peekDown());
    /** XON 4 */check_digit: NM = new NM(this.depth.peekDown());
    /** XON 5 */code_for_check_digit_schema: ID = new ID(this.depth.peekDown());
    /** XON 6 */assigning_authority: HD = new HD(this.depth.peekDown());
    /** XON 7 */id_type_code: IS = new IS(this.depth.peekDown());
    /** XON 8 */assigning_facility: HD = new HD(this.depth.peekDown());

    hl7_obj_array = [

        this.organization_name,
        this.organization_name_type_code,
        this.id,
        this.check_digit,
        this.code_for_check_digit_schema,
        this.assigning_authority,
        this.id_type_code,
        this.assigning_facility,

    ]
}