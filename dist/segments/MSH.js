"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const datatypes_1 = require("../datatypes");
const depth_1 = require("../base/depth");
//braden is one of the best men i know
class MSH extends HL7Obj_1.HL7Obj {
    constructor() {
        super(new depth_1.Depth(depth_1.DepthEnum.SEGMENT));
        /** MSH-0*/ this.segment = new datatypes_1.ST(this.depth.peekDown());
        /** MSH-1*/ this.field_separators = new datatypes_1.ST(this.depth.peekDown());
        // /** MSH-2*/encoding_characters: ST = new ST(this.depth.peekDown());
        /** MSH-3*/ this.sending_application = new datatypes_1.HD(this.depth.peekDown());
        /** MSH-4*/ this.sending_facility = new datatypes_1.HD(this.depth.peekDown());
        /** MSH-5*/ this.receiving_application = new datatypes_1.HD(this.depth.peekDown());
        /** MSH-6*/ this.receiving_facility = new datatypes_1.HD(this.depth.peekDown());
        /** MSH-7*/ this.datetime = new datatypes_1.TS(this.depth.peekDown());
        /** MSH-8*/ this.security = new datatypes_1.ST(this.depth.peekDown());
        /** MSH-9*/ this.message_type = new datatypes_1.Z_MT(this.depth.peekDown());
        /** MSH-10*/ this.message_control_id = new datatypes_1.ST(this.depth.peekDown());
        /** MSH-11*/ this.processing_id = new datatypes_1.PT(this.depth.peekDown());
        /** MSH-12*/ this.version_id = new datatypes_1.ID(this.depth.peekDown());
        /** MSH-13*/ this.sequence_number = new datatypes_1.NM(this.depth.peekDown());
        /** MSH-14*/ this.continuation_pointer = new datatypes_1.ST(this.depth.peekDown());
        /** MSH-15*/ this.accept_ack_type = new datatypes_1.ID(this.depth.peekDown());
        /** MSH-16*/ this.application_ack_type = new datatypes_1.ID(this.depth.peekDown());
        /** MSH-17*/ this.country_code = new datatypes_1.ID(this.depth.peekDown());
        /** MSH-18*/ this.character_set = new datatypes_1.ID(this.depth.peekDown());
        /** MSH-19*/ this.principal_language = new datatypes_1.CE(this.depth.peekDown());
        this.hl7_obj_array = [
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
        ];
    }
}
exports.MSH = MSH;
