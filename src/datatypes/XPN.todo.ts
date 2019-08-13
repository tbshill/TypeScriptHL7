import { HL7Obj } from '../base/HL7Obj';
import { ST } from './ST';

export class XPN extends HL7Obj {
    family: ST = new ST(this.depth.peekDown());
    given: ST = new ST(this.depth.peekDown());
    middle: ST = new ST(this.depth.peekDown());

}