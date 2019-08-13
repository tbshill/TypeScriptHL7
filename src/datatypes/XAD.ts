import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';

export class XAD extends HL7Obj {
    street: ST = new ST(this.depth.peekDown());
    other: ST = new ST(this.depth.peekDown());
    city: ST = new ST(this.depth.peekDown());
    zip: ST = new ST(this.depth.peekDown());
    country: ID = new ID(this.depth.peekDown());
    address_type: ID = new ID(this.depth.peekDown());
    other_geographic_designation: ST = new ST(this.depth.peekDown());
    country_code: IS = new IS(this.depth.peekDown());
    census_tract: IS = new IS(this.depth.peekDown());

    hl7_obj_array = [
        this.street,
        this.other,
        this.city,
        this.zip,
        this.country,
        this.address_type,
        this.other_geographic_designation,
        this.country_code,
        this.census_tract,
    ]
}