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
var NM = /** @class */ (function (_super) {
    __extends(NM, _super);
    function NM(depth) {
        var _this = _super.call(this, depth) || this;
        _this.value = new Number();
        _this.shouldBeBlank = false;
        _this.hl7_obj_array = [_this.value];
        return _this;
    }
    NM.prototype.isNumericalCharacter = function (input) {
        if (input !== '') {
            if (input[0] >= '0' && input[0] <= '9') {
                return true;
            }
        }
        return false;
    };
    NM.prototype.fromString = function (input) {
        this.shouldBeBlank = !this.isNumericalCharacter(input);
        this.value = Number(input);
        console.log(this.value);
        console.log(this.shouldBeBlank);
    };
    NM.prototype.toString = function () {
        if (this.shouldBeBlank) {
            return '';
        }
        return this.value.toString();
    };
    return NM;
}(HL7Obj_1.HL7Obj));
exports.NM = NM;
