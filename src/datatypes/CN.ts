import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { HD } from './HD';
import { IS } from './IS';

//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)>

export class CN extends HL7Obj {
    id: ST = new ST(this.depth.peekDown());
    family_name: ST = new ST(this.depth.peekDown());
    given_name: ST = new ST(this.depth.peekDown());
    middle_name: ST = new ST(this.depth.peekDown());
    suffix: ST = new ST(this.depth.peekDown());
    prefix: ST = new ST(this.depth.peekDown());
    degree: ST = new ST(this.depth.peekDown());
    source_table: IS = new IS(this.depth.peekDown());
    assigning_authority: HD = new HD(this.depth.peekDown());

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
    ]
}