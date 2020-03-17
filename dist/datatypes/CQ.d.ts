import { HL7Obj } from '../base/HL7Obj';
import { NM } from './NM';
import { CE } from './CE';
export declare class CQ extends HL7Obj {
    quantity: NM;
    units: CE;
    hl7_obj_array: (CE | NM)[];
}
