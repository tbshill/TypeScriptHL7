import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { ID } from './ID';
import { IS } from './IS';
export declare class XAD extends HL7Obj {
    /** 1*/ street: ST;
    /** 2*/ other: ST;
    /** 3*/ city: ST;
    /** 4*/ zip: ST;
    /** 5*/ state: ST;
    /** 6*/ country: ID;
    /** 7*/ address_type: ID;
    /** 8*/ other_geographic_designation: ST;
    /** 9*/ country_code: IS;
    /** 10*/ census_tract: IS;
    hl7_obj_array: (ST | IS | ID)[];
}
