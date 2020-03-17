import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';
import { NM } from './NM';
import { CE } from './CE';
import { MO } from './MO';
export declare class CP extends HL7Obj {
    price: MO;
    price_type: ID;
    from_value: NM;
    to_value: NM;
    range_units: CE;
    range_type: ID;
    hl7_obj_array: (ID | CE | NM | MO)[];
}
