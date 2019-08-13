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
var TS = /** @class */ (function (_super) {
    __extends(TS, _super);
    function TS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.datetime = new _1.ST(_this.depth.peekDown());
        _this.precision = new _1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.datetime,
            _this.precision
        ];
        return _this;
    }
    return TS;
}(HL7Obj_1.HL7Obj));
exports.TS = TS;
