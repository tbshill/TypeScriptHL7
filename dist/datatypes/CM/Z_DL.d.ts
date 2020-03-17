import { HL7Obj } from '../../base/HL7Obj';
import { IS } from '../IS';
import { TS } from '../TS';
/**
 * CM for PV1 discharged_to_location
 */
export declare class Z_DL extends HL7Obj {
    discharge_location: IS;
    effective_date: TS;
    hl7_obj_array: (IS | TS)[];
}
