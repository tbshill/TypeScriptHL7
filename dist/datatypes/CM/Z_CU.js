"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const TS_1 = require("../TS");
const IS_1 = require("../IS");
const HD_1 = require("../HD");
const __1 = require("..");
/**
 * Clinical User - OBR
 *  - principal_interpreter
 *  - assistant_inperpreter
 *  - technician
 *  - transcriptionist
 */
class Z_CU extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.name = new __1.CN(this.depth.peekDown());
        this.start_datetime = new TS_1.TS(this.depth.peekDown());
        this.end_datetime = new TS_1.TS(this.depth.peekDown());
        this.point_of_care = new IS_1.IS(this.depth.peekDown());
        this.room = new IS_1.IS(this.depth.peekDown());
        this.bed = new IS_1.IS(this.depth.peekDown());
        this.facility = new HD_1.HD(this.depth.peekDown());
        this.location_satus = new IS_1.IS(this.depth.peekDown());
        this.patient_location_type = new IS_1.IS(this.depth.peekDown());
        this.building = new IS_1.IS(this.depth.peekDown());
        this.floor = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.name,
            this.start_datetime,
            this.end_datetime,
            this.point_of_care,
            this.room,
            this.bed,
            this.facility,
            this.location_satus,
            this.patient_location_type,
            this.building,
            this.floor,
        ];
    }
}
exports.Z_CU = Z_CU;
