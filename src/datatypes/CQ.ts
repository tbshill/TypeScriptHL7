import { HL7Obj } from '../base/HL7Obj';
import { NM } from './NM';
import { CE } from './CE';

//<quantity (NM)> ^ <units (CE)>
export class CQ extends HL7Obj {
    quantity: NM = new NM(this.depth.peekDown());
    units: CE = new CE(this.depth.peekDown());

    hl7_obj_array = [
        this.quantity,
        this.units
    ];
}