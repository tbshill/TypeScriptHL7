import { HL7Obj } from '../base/HL7Obj';
import { ST, HD, ID, CE, Z_MT, NM, PT, TS } from '../datatypes';
export declare class MSH extends HL7Obj {
    /** MSH-0*/ segment: ST;
    /** MSH-1*/ field_separators: ST;
    /** MSH-3*/ sending_application: HD;
    /** MSH-4*/ sending_facility: HD;
    /** MSH-5*/ receiving_application: HD;
    /** MSH-6*/ receiving_facility: HD;
    /** MSH-7*/ datetime: TS;
    /** MSH-8*/ security: ST;
    /** MSH-9*/ message_type: Z_MT;
    /** MSH-10*/ message_control_id: ST;
    /** MSH-11*/ processing_id: PT;
    /** MSH-12*/ version_id: ID;
    /** MSH-13*/ sequence_number: NM;
    /** MSH-14*/ continuation_pointer: ST;
    /** MSH-15*/ accept_ack_type: ID;
    /** MSH-16*/ application_ack_type: ID;
    /** MSH-17*/ country_code: ID;
    /** MSH-18*/ character_set: ID;
    /** MSH-19*/ principal_language: CE;
    hl7_obj_array: (ST | Z_MT | ID | TS | HD | CE | NM | PT)[];
    constructor();
}
