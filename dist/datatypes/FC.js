"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ID_1 = require("./ID");
const TS_1 = require("./TS");
class FC extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        this.financial_class = new ID_1.ID(this.depth.peekDown());
        this.effective_date = new TS_1.TS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.financial_class,
            this.effective_date
        ];
    }
}
exports.FC = FC;
