"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ID_1 = require("./ID");
const NM_1 = require("./NM");
const CE_1 = require("./CE");
const MO_1 = require("./MO");
class CP extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.price = new MO_1.MO(this.depth.peekDown());
        this.price_type = new ID_1.ID(this.depth.peekDown());
        this.from_value = new NM_1.NM(this.depth.peekDown());
        this.to_value = new NM_1.NM(this.depth.peekDown());
        this.range_units = new CE_1.CE(this.depth.peekDown());
        this.range_type = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.price,
            this.price_type,
            this.from_value,
            this.to_value,
            this.range_units,
            this.range_type,
        ];
    }
}
exports.CP = CP;
