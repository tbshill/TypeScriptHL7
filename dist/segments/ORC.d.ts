import { HL7Obj } from '../base/HL7Obj';
import { ST, ID, TS, CE, XCN, EI, PL, XTN, TQ, Z_PA } from '../datatypes';
export declare class ORC extends HL7Obj {
    /** ORC-0 */ segment: ST;
    /** ORC-1 */ order_control: ID;
    /** ORC-2 */ placer_order_number: EI;
    /** ORC-3 */ filler_order_number: EI;
    /** ORC-4 */ placer_groupe_number: EI;
    /** ORC-5 */ order_status: ID;
    /** ORC-6 */ response_flag: ID;
    /** ORC-7 */ quantity_timing: TQ;
    /** ORC-8 */ parent: Z_PA;
    /** ORC-9 */ datetime_transaction: TS;
    /** ORC-10 */ entered_by: XCN;
    /** ORC-11 */ verified_by: XCN;
    /** ORC-12 */ ordering_provider: XCN;
    /** ORC-13 */ enterers_location: PL;
    /** ORC-14 */ call_back_phone_number: XTN;
    /** ORC-15 */ order_effective_datetime: TS;
    /** ORC-16 */ order_control_code_reason: CE;
    /** ORC-17 */ entering_organization: CE;
    /** ORC-18 */ entering_device: CE;
    /** ORC-19 */ action_by: XCN;
    hl7_obj_array: (ST | ID | EI | Z_PA | TS | CE | XCN | PL | XTN | TQ)[];
    constructor();
}
