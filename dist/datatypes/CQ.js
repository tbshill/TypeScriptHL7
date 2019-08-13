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
var NM_1 = require("./NM");
var CE_1 = require("./CE");
//<quantity (NM)> ^ <units (CE)>
var CQ = /** @class */ (function (_super) {
    __extends(CQ, _super);
    function CQ() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.quantity = new NM_1.NM(_this.depth.peekDown());
        _this.units = new CE_1.CE(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.quantity,
            _this.units
        ];
        return _this;
    }
    return CQ;
}(HL7Obj_1.HL7Obj));
exports.CQ = CQ;
