import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { Depth, DepthEnum } from '../base/depth';
import { HD, IS, ID } from '.';

//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)> ^ <name type code(ID)> ^ <identifier check digit (ST)> ^ <code identifying the check digit scheme employed (ID )> ^ <identifier type code (IS)> ^ <assigning facility (HD)>

export class XCN extends HL7Obj {

    /** XCN -1 */id: ST = new ST(this.depth.peekDown());
    /** XCN -2 */family_name: ST = new ST(this.depth.peekDown());
    /** XCN -3 */given_name: ST = new ST(this.depth.peekDown());
    /** XCN -4 */middle_name: ST = new ST(this.depth.peekDown());
    /** XCN -5 */suffix: ST = new ST(this.depth.peekDown());
    /** XCN -6 */prefix: ST = new ST(this.depth.peekDown());
    /** XCN -7 */degree: ST = new ST(this.depth.peekDown());
    /** XCN -8 */source_table: IS = new IS(this.depth.peekDown());
    /** XCN -9 */assigning_authority: HD = new HD(this.depth.peekDown());
    /** XCN -10 */name_type_code: ID = new ID(this.depth.peekDown());
    /** XCN -11 */identifier_check_digit: ST = new ST(this.depth.peekDown());
    /** XCN -12 */employed_check_digit_schema: ID = new ID(this.depth.peekDown());
    /** XCN -13 */id_type_code: IS = new IS(this.depth.peekDown());
    /** XCN -14 */assigning_facility: HD = new HD(this.depth.peekDown());

    hl7_obj_array = [
        this.id,
        this.family_name,
        this.given_name,
        this.middle_name,
        this.suffix,
        this.prefix,
        this.degree,
        this.source_table,
        this.assigning_authority,
        this.name_type_code,
        this.identifier_check_digit,
        this.employed_check_digit_schema,
        this.id_type_code,
        this.assigning_facility,
    ]

}