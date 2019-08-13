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
var _1 = require(".");
//In Version 2.3, replaces the TN data type. [NNN] [(999)]999-9999 [X99999] [B99999] [C any text] ^ <telecommunication use code (ID)> ^ <telecommunication equipment type (ID)> ^ <email address (ST)> ^ <country code (NM)> ^ <area/city code (NM)> ^ <phone number (NM)> ^ <extension (NM)> ^ <any text (ST)>
var XTN = /** @class */ (function (_super) {
    __extends(XTN, _super);
    function XTN() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validated_number = new _1.ST(_this.depth.peekDown());
        _this.telecom_use_code = new _1.ID(_this.depth.peekDown());
        _this.telecom_equipment_type = new _1.ID(_this.depth.peekDown());
        _this.email = new _1.ST(_this.depth.peekDown());
        _this.country_code = new _1.NM(_this.depth.peekDown());
        _this.area_code = new _1.NM(_this.depth.peekDown());
        _this.phone_number = new _1.NM(_this.depth.peekDown());
        _this.extension = new _1.NM(_this.depth.peekDown());
        _this.text = new _1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.validated_number,
            _this.telecom_use_code,
            _this.telecom_equipment_type,
            _this.email,
            _this.country_code,
            _this.area_code,
            _this.phone_number,
            _this.extension,
            _this.text,
        ];
        return _this;
    }
    XTN.prototype.validatePhoneNumber = function (input) {
        return true; // TODO: Fix Me
    };
    return XTN;
}(HL7Obj_1.HL7Obj));
exports.XTN = XTN;
