"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const IS_1 = require("./IS");
class XPN extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.family = new ST_1.ST(this.depth.peekDown());
        this.given = new ST_1.ST(this.depth.peekDown());
        this.middle = new ST_1.ST(this.depth.peekDown());
        this.suffix = new ST_1.ST(this.depth.peekDown());
        this.prefix = new ST_1.ST(this.depth.peekDown());
        this.degree = new ST_1.ST(this.depth.peekDown());
        this.name_type_code = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.family,
            this.given,
            this.middle,
            this.suffix,
            this.prefix,
            this.degree,
            this.name_type_code,
        ];
    }
}
exports.XPN = XPN;
