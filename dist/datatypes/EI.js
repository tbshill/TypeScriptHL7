"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const IS_1 = require("./IS");
const ID_1 = require("./ID");
//<entity identifier (ST)> ^ <namespace ID (IS)> ^ <universal ID (ST)> ^ <universal ID type (ID)>
class EI extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.entity_id = new ST_1.ST(this.depth.peekDown());
        this.namespace_id = new IS_1.IS(this.depth.peekDown());
        this.universal_id = new ST_1.ST(this.depth.peekDown());
        this.universal_id_type = new ID_1.ID(this.depth.peekDown());
        this.hl7_obj_array = [
            this.entity_id,
            this.namespace_id,
            this.universal_id,
            this.universal_id_type
        ];
    }
}
exports.EI = EI;
