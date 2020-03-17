import { HL7Obj } from '../base/HL7Obj';
import { ID } from './ID';
import { TS } from './TS';
export declare class FC extends HL7Obj {
    financial_class: ID;
    effective_date: TS;
    hl7_obj_array: (ID | TS)[];
}
