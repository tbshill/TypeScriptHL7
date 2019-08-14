import { HL7Obj } from '../../base/HL7Obj';
import { CE } from '../CE';
import { TX } from '../TX';
/**
 * CM for OBR - speciemen_source
 */

export class Z_SS extends HL7Obj {
    specimen_name: CE = new CE(this.depth.peekDown());
    additives: TX = new TX(this.depth.peekDown());
    freetext: TX = new TX(this.depth.peekDown());
    body_site: CE = new CE(this.depth.peekDown());
    site_modifier: CE = new CE(this.depth.peekDown());
    collection_method_modifier_code: CE = new CE(this.depth.peekDown());

    hl7_obj_array = [
        this.specimen_name,
        this.additives,
        this.freetext,
        this.body_site,
        this.site_modifier,
        this.collection_method_modifier_code
    ]
}