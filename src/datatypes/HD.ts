import { HL7Obj } from '../base/HL7Obj';
import { ID, ST, IS } from '.';

export class HD extends HL7Obj {
    /** 1*/namespace_id: IS = new IS(this.depth.peekDown());
    /** 1*/universal_id: ST = new ST(this.depth.peekDown());
    /** 1*/universal_id_type: ID = new ID(this.depth.peekDown());

    hl7_obj_array = [
        this.namespace_id,
        this.universal_id,
        this.universal_id_type,
    ]
}