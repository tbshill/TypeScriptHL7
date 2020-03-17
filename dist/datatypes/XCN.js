"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HL7Obj_1 = require("../base/HL7Obj");
const ST_1 = require("./ST");
const _1 = require(".");
//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)> ^ <name type code(ID)> ^ <identifier check digit (ST)> ^ <code identifying the check digit scheme employed (ID )> ^ <identifier type code (IS)> ^ <assigning facility (HD)>
class XCN extends HL7Obj_1.HL7Obj {
    constructor() {
        super(...arguments);
        /** XCN -1 */ this.id = new ST_1.ST(this.depth.peekDown());
        /** XCN -2 */ this.family_name = new ST_1.ST(this.depth.peekDown());
        /** XCN -3 */ this.given_name = new ST_1.ST(this.depth.peekDown());
        /** XCN -4 */ this.middle_name = new ST_1.ST(this.depth.peekDown());
        /** XCN -5 */ this.suffix = new ST_1.ST(this.depth.peekDown());
        /** XCN -6 */ this.prefix = new ST_1.ST(this.depth.peekDown());
        /** XCN -7 */ this.degree = new ST_1.ST(this.depth.peekDown());
        /** XCN -8 */ this.source_table = new _1.IS(this.depth.peekDown());
        /** XCN -9 */ this.assigning_authority = new _1.HD(this.depth.peekDown());
        /** XCN -10 */ this.name_type_code = new _1.ID(this.depth.peekDown());
        /** XCN -11 */ this.identifier_check_digit = new ST_1.ST(this.depth.peekDown());
        /** XCN -12 */ this.employed_check_digit_schema = new _1.ID(this.depth.peekDown());
        /** XCN -13 */ this.id_type_code = new _1.IS(this.depth.peekDown());
        /** XCN -14 */ this.assigning_facility = new _1.HD(this.depth.peekDown());
        this.hl7_obj_array = [
            this.id,
            this.family_name,
            this.given_name,
            this.middle_name,
            this.suffix,
            this.prefix,
            this.degree,
            this.source_table,
            this.assigning_authority,
            this.name_type_code,
            this.identifier_check_digit,
            this.employed_check_digit_schema,
            this.id_type_code,
            this.assigning_facility,
        ];
    }
}
exports.XCN = XCN;
