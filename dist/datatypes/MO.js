"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const NM_1 = require("./NM");
const ID_1 = require("./ID");
class MO extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.quantity = new NM_1.NM(this.depth.peekDown());
        this.denomination = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.quantity,
            this.denomination
        ];
    }
}
exports.MO = MO;
