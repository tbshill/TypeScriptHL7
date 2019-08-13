"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HL7Obj_1 = require("../base/HL7Obj");
var ST_1 = require("./ST");
var _1 = require(".");
//<ID number (ST)> ^ <family name (ST)> ^ <given name (ST)> ^ <middle initial or name (ST)> ^ <suffix (e.g., JR or III) (ST)> ^ <prefix (e.g., DR) (ST)> ^ <degree (e.g., MD) (ST)> ^ <source table (IS)> ^ <assigning authority (HD)> ^ <name type code(ID)> ^ <identifier check digit (ST)> ^ <code identifying the check digit scheme employed (ID )> ^ <identifier type code (IS)> ^ <assigning facility (HD)>
var XCN = /** @class */ (function (_super) {
    __extends(XCN, _super);
    function XCN() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** XCN -1 */ _this.id = new ST_1.ST(_this.depth.peekDown());
        /** XCN -2 */ _this.family_name = new ST_1.ST(_this.depth.peekDown());
        /** XCN -3 */ _this.given_name = new ST_1.ST(_this.depth.peekDown());
        /** XCN -4 */ _this.middle_name = new ST_1.ST(_this.depth.peekDown());
        /** XCN -5 */ _this.suffix = new ST_1.ST(_this.depth.peekDown());
        /** XCN -6 */ _this.prefix = new ST_1.ST(_this.depth.peekDown());
        /** XCN -7 */ _this.degree = new ST_1.ST(_this.depth.peekDown());
        /** XCN -8 */ _this.source_table = new _1.IS(_this.depth.peekDown());
        /** XCN -9 */ _this.assigning_authority = new _1.HD(_this.depth.peekDown());
        /** XCN -10 */ _this.name_type_code = new _1.ID(_this.depth.peekDown());
        /** XCN -11 */ _this.identifier_check_digit = new ST_1.ST(_this.depth.peekDown());
        /** XCN -12 */ _this.employed_check_digit_schema = new _1.ID(_this.depth.peekDown());
        /** XCN -13 */ _this.id_type_code = new _1.IS(_this.depth.peekDown());
        /** XCN -14 */ _this.assigning_facility = new _1.HD(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.id,
            _this.family_name,
            _this.given_name,
            _this.middle_name,
            _this.suffix,
            _this.prefix,
            _this.degree,
            _this.source_table,
            _this.assigning_authority,
            _this.name_type_code,
            _this.identifier_check_digit,
            _this.employed_check_digit_schema,
            _this.id_type_code,
            _this.assigning_facility,
        ];
        return _this;
    }
    return XCN;
}(HL7Obj_1.HL7Obj));
exports.XCN = XCN;
