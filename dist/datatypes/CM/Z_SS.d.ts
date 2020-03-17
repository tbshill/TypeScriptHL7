import { HL7Obj } from '../../base/HL7Obj';
import { CE } from '../CE';
import { TX } from '../TX';
/**
 * CM for OBR - speciemen_source
 */
export declare class Z_SS extends HL7Obj {
    specimen_name: CE;
    additives: TX;
    freetext: TX;
    body_site: CE;
    site_modifier: CE;
    collection_method_modifier_code: CE;
    hl7_obj_array: (TX | CE)[];
}
