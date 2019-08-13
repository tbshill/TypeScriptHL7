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
var TX = /** @class */ (function (_super) {
    __extends(TX, _super);
    function TX(depth) {
        var _this = _super.call(this, depth) || this;
        _this.value = new String("");
        _this.hl7_obj_array = [_this.value];
        return _this;
    }
    TX.prototype.fromString = function (input) {
        this.value = input;
    };
    TX.prototype.toString = function () {
        return this.value;
    };
    return TX;
}(HL7Obj_1.HL7Obj));
exports.TX = TX;
