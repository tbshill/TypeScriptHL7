"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ID_1 = require("./ID");
class PT extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.id = new ID_1.ID(this.depth.peekDown());
        this.mode = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.mode
        ];
    }
}
exports.PT = PT;
