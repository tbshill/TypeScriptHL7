"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const _1 = require(".");
class TQ extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.quantity = new _1.ST(this.depth.peekDown()); // FIXME: Should be CQ
        this.interval = new _1.ST(this.depth.peekDown());
        this.duration = new _1.ST(this.depth.peekDown());
        this.start_datetime = new _1.TS(this.depth.peekDown());
        this.end_datetime = new _1.TS(this.depth.peekDown());
        this.priority = new _1.ID(this.depth.peekDown());
        this.condition = new _1.ST(this.depth.peekDown());
        this.text = new _1.TX(this.depth.peekDown());
        this.conjunction = new _1.ID(this.depth.peekDown());
        this.order_sequencing = new _1.ST(this.depth.peekDown());
        this.hl7_obj_array = [
            this.quantity,
            this.interval,
            this.duration,
            this.start_datetime,
            this.end_datetime,
            this.priority,
            this.condition,
            this.text,
            this.conjunction,
            this.order_sequencing,
        ];
    }
}
exports.TQ = TQ;
