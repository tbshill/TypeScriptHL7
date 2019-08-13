import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';
import { NM } from './NM';
import { CE } from './CE';
import { MO } from './MO';

export class CP extends HL7Obj {
    price: MO = new MO(this.depth.peekDown());
    price_type: ID = new ID(this.depth.peekDown());
    from_value: NM = new NM(this.depth.peekDown());
    to_value: NM = new NM(this.depth.peekDown());
    range_units: CE = new CE(this.depth.peekDown());
    range_type: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.price,
        this.price_type,
        this.from_value,
        this.to_value,
        this.range_units,
        this.range_type,
    ]
}