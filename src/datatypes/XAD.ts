import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';

export class XAD extends HL7Obj {
    /** 1*/street: ST = new ST(this.depth.peekDown());
    /** 2*/other: ST = new ST(this.depth.peekDown());
    /** 3*/city: ST = new ST(this.depth.peekDown());
    /** 4*/zip: ST = new ST(this.depth.peekDown());
    /** 5*/state: ST = new ST(this.depth.peekDown());
    /** 6*/country: ID = new ID(this.depth.peekDown());
    /** 7*/address_type: ID = new ID(this.depth.peekDown());
    /** 8*/other_geographic_designation: ST = new ST(this.depth.peekDown());
    /** 9*/country_code: IS = new IS(this.depth.peekDown());
    /** 10*/census_tract: IS = new IS(this.depth.peekDown());

    hl7_obj_array = [
        this.street,
        this.other,
        this.city,
        this.state,
        this.zip,
        this.country,
        this.address_type,
        this.other_geographic_designation,
        this.country_code,
        this.census_tract,
    ]
}