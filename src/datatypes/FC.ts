import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';
import { TS } from './TS';

export class FC extends HL7Obj {
    financial_class: ID = new ID(this.depth.peekDown());
    effective_date: TS = new TS(this.depth.peekDown());

    hl7_obj_array = [
        this.financial_class,
        this.effective_date
    ];
}