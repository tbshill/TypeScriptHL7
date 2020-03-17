"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
class SI extends HL7Obj_1.HL7Obj {
    constructor(depth) {
        super(depth);
        this.value = new Number();
        this.shouldBeBlank = false;
        this.hl7_obj_array = [this.value];
    }
    fromString(input) {
        if (input == undefined || input == '') {
            this.shouldBeBlank = true;
        }
        else {
            this.shouldBeBlank = false;
            this.value = Number(input) || input;
        }
    }
    toString() {
        if (this.value == null) {
            return "\"\"";
        }
        if (this.shouldBeBlank) {
            return "";
        }
        return this.value.toString();
    }
}
exports.SI = SI;
