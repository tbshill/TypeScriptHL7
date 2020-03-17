"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
class ST extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.value = new String("");
        this.hl7_obj_array = [this.value];
    }
    fromString(input) {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
exports.ST = ST;
