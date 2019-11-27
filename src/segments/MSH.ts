import { HL7Obj } from '../base/HL7Obj';
import { ST, HD, ID, CE, Z_MT, NM, PT, TS } from '../datatypes';
import { Depth, DepthEnum } from '../base/depth';
//braden is one of the best men i know
export class MSH extends HL7Obj {
    /** MSH-0*/segment: ST = new ST(this.depth.peekDown());
    /** MSH-1*/field_separators: ST = new ST(this.depth.peekDown());
    // /** MSH-2*/encoding_characters: ST = new ST(this.depth.peekDown());
    /** MSH-3*/sending_application: HD = new HD(this.depth.peekDown());
    /** MSH-4*/sending_facility: HD = new HD(this.depth.peekDown());
    /** MSH-5*/receiving_application: HD = new HD(this.depth.peekDown());
    /** MSH-6*/receiving_facility: HD = new HD(this.depth.peekDown());
    /** MSH-7*/datetime: TS = new TS(this.depth.peekDown());
    /** MSH-8*/security: ST = new ST(this.depth.peekDown());
    /** MSH-9*/message_type: Z_MT = new Z_MT(this.depth.peekDown());
    /** MSH-10*/message_control_id: ST = new ST(this.depth.peekDown());
    /** MSH-11*/processing_id: PT = new PT(this.depth.peekDown());
    /** MSH-12*/version_id: ID = new ID(this.depth.peekDown());
    /** MSH-13*/sequence_number: NM = new NM(this.depth.peekDown());
    /** MSH-14*/continuation_pointer: ST = new ST(this.depth.peekDown());
    /** MSH-15*/accept_ack_type: ID = new ID(this.depth.peekDown());
    /** MSH-16*/application_ack_type: ID = new ID(this.depth.peekDown());
    /** MSH-17*/country_code: ID = new ID(this.depth.peekDown());
    /** MSH-18*/character_set: ID = new ID(this.depth.peekDown());
    /** MSH-19*/principal_language: CE = new CE(this.depth.peekDown());


    hl7_obj_array = [
        this.segment,
        this.field_separators,
        // this.encoding_characters,
        this.sending_application,
        this.sending_facility,
        this.receiving_application,
        this.receiving_facility,
        this.datetime,
        this.security,
        this.message_type,
        this.message_control_id,
        this.processing_id,
        this.version_id,
        this.sequence_number,
        this.continuation_pointer,
        this.accept_ack_type,
        this.application_ack_type,
        this.country_code,
        this.character_set,
        this.principal_language,
    ]

    constructor() {
        super(new Depth(DepthEnum.SEGMENT));
    }
}