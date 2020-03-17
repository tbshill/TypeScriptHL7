"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const EI_1 = require("../EI");
//<parent's placer order number (EI)> ^ <parent's filler order number (EI)>
/**
 * CM for ORC-8 <parent>
 */
class Z_PA extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.parents_placer_order_number = new EI_1.EI(this.depth.peekDown());
        this.parents_filler_order_number = new EI_1.EI(this.depth.peekDown());
        this.hl7_obj_array = [
            this.parents_placer_order_number,
            this.parents_filler_order_number
        ];
    }
}
exports.Z_PA = Z_PA;
