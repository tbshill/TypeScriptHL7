import { HL7Obj } from '../../base/HL7Obj';
import { ST } from '../ST';
import { IS } from '../IS';
import { TS } from '../TS';
/**
 * CM for PV1 discharged_to_location
 */
export class Z_DL extends HL7Obj {
    discharge_location: IS = new IS(this.depth.peekDown());
    effective_date: TS = new TS(this.depth.peekDown());

    hl7_obj_array = [
        this.discharge_location,
        this.effective_date
    ]
}