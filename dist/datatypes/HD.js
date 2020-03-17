"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const _1 = require(".");
class HD extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        /** 1*/ this.namespace_id = new _1.IS(this.depth.peekDown());
        /** 1*/ this.universal_id = new _1.ST(this.depth.peekDown());
        /** 1*/ this.universal_id_type = new _1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.namespace_id,
            this.universal_id,
            this.universal_id_type,
        ];
    }
}
exports.HD = HD;
