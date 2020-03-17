"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
// <identifier (ST)> ^ <text (ST)> ^ <name of coding system (ST)> ^ <alternate identifier (ST)> ^ <alternate text (ST)> ^ <name of alternate coding system (ST)>
class CE extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        /** -1 */ this.id = new ST_1.ST(this.depth.peekDown());
        /** -2 */ this.text = new ST_1.ST(this.depth.peekDown());
        /** -3 */ this.coding_system_name = new ST_1.ST(this.depth.peekDown());
        /** -4 */ this.alternate_id = new ST_1.ST(this.depth.peekDown());
        /** -5 */ this.alternate_text = new ST_1.ST(this.depth.peekDown());
        /** -6 */ this.alternate_coding_system_name = new ST_1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.text,
            this.coding_system_name,
            this.alternate_id,
            this.alternate_text,
            this.alternate_coding_system_name,
        ];
    }
}
exports.CE = CE;
