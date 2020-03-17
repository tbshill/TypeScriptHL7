"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const ID_1 = require("./ID");
const IS_1 = require("./IS");
class XAD extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        /** 1*/ this.street = new ST_1.ST(this.depth.peekDown());
        /** 2*/ this.other = new ST_1.ST(this.depth.peekDown());
        /** 3*/ this.city = new ST_1.ST(this.depth.peekDown());
        /** 4*/ this.zip = new ST_1.ST(this.depth.peekDown());
        /** 5*/ this.state = new ST_1.ST(this.depth.peekDown());
        /** 6*/ this.country = new ID_1.ID(this.depth.peekDown());
        /** 7*/ this.address_type = new ID_1.ID(this.depth.peekDown());
        /** 8*/ this.other_geographic_designation = new ST_1.ST(this.depth.peekDown());
        /** 9*/ this.country_code = new IS_1.IS(this.depth.peekDown());
        /** 10*/ this.census_tract = new IS_1.IS(this.depth.peekDown());
        this.hl7_obj_array = [
            this.street,
            this.other,
            this.city,
            this.state,
            this.zip,
            this.country,
            this.address_type,
            this.other_geographic_designation,
            this.country_code,
            this.census_tract,
        ];
    }
}
exports.XAD = XAD;
