"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../../base/HL7Obj");
const CE_1 = require("../CE");
const TX_1 = require("../TX");
/**
 * CM for OBR - speciemen_source
 */
class Z_SS extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.specimen_name = new CE_1.CE(this.depth.peekDown());
        this.additives = new TX_1.TX(this.depth.peekDown());
        this.freetext = new TX_1.TX(this.depth.peekDown());
        this.body_site = new CE_1.CE(this.depth.peekDown());
        this.site_modifier = new CE_1.CE(this.depth.peekDown());
        this.collection_method_modifier_code = new CE_1.CE(this.depth.peekDown());
        this.hl7_obj_array = [
            this.specimen_name,
            this.additives,
            this.freetext,
            this.body_site,
            this.site_modifier,
            this.collection_method_modifier_code
        ];
    }
}
exports.Z_SS = Z_SS;
