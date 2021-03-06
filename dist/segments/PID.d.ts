import { HL7Obj } from '../base/HL7Obj';
import { ST, TS, IS, XTN, CE, ID, NM, DLN, SI, XAD, CX } from '../datatypes';
import { XPN } from '../datatypes/XPN';
export declare class PID extends HL7Obj {
    constructor();
    /** PID-0 */ segment: ST;
    /** PID-1 */ set_id: SI;
    /** PID-2 */ external_id: CX;
    /** PID-3 */ internal_id: CX;
    /** PID-4 */ alternate_id: CX;
    /** PID-5 */ patient_name: XPN;
    /** PID-6 */ mothers_maiden_name: XPN;
    /** PID-7 */ datetime_of_birth: TS;
    /** PID-8 */ sex: IS;
    /** PID-9 */ patient_alias: XPN;
    /** PID-10 */ race: IS;
    /** PID-11 */ patient_address: XAD;
    /** PID-12 */ country_code: IS;
    /** PID-13 */ phone_home: XTN;
    /** PID-14 */ phone_business: XTN;
    /** PID-15 */ primary_language: CE;
    /** PID-16 */ marital_status: IS;
    /** PID-17 */ religion: IS;
    /** PID-18 */ account_number: CX;
    /** PID-19 */ ssn: ST;
    /** PID-20 */ drivers_license: DLN;
    /** PID-21 */ mothers_id: CX;
    /** PID-22 */ ethnic_group: IS;
    /** PID-23 */ birth_place: ST;
    /** PID-24 */ multiple_birth_indicator: ID;
    /** PID-25 */ birth_order: NM;
    /** PID-26 */ citizenship: IS;
    /** PID-27 */ veterans_military_status: CE;
    /** PID-28 */ nationality: CE;
    /** PID-29 */ death_datetime: TS;
    /** PID-30 */ death_indicator: ID;
    hl7_obj_array: (ST | IS | ID | TS | CE | NM | XTN | DLN | SI | XAD | CX | XPN)[];
}
