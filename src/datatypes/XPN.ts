import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';
import { IS } from './IS';

export class XPN extends HL7Obj {
    family: ST = new ST(this.depth.peekDown());
    given: ST = new ST(this.depth.peekDown());
    middle: ST = new ST(this.depth.peekDown());
    suffix: ST = new ST(this.depth.peekDown());
    prefix: ST = new ST(this.depth.peekDown());
    degree: ST = new ST(this.depth.peekDown());
    name_type_code: IS = new IS(this.depth.peekDown());

    hl7_obj_array = [
        this.family,
        this.given,
        this.middle,
        this.suffix,
        this.prefix,
        this.degree,
        this.name_type_code,
    ]
}