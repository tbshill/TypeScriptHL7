"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const ST_1 = require("../ST");
/**
 * CM for MSH-8 <message type>
 */
class Z_MT extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.event = new ST_1.ST(this.depth.peekDown());
        this.trigger = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.event,
            this.trigger
        ];
    }
}
exports.Z_MT = Z_MT;
