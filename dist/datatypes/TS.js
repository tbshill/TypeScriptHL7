"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const _1 = require(".");
class TS extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.datetime = new _1.ST(this.depth.peekDown());
        this.precision = new _1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.datetime,
            this.precision
        ];
    }
}
exports.TS = TS;
