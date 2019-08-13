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
var HL7Obj_1 = require("../../base/HL7Obj");
var ST_1 = require("../ST");
/**
 * CM for MSH-8 <message type>
 */
var Z_MT = /** @class */ (function (_super) {
    __extends(Z_MT, _super);
    function Z_MT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.event = new ST_1.ST(_this.depth.peekDown());
        _this.trigger = new ST_1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.event,
            _this.trigger
        ];
        return _this;
    }
    return Z_MT;
}(HL7Obj_1.HL7Obj));
exports.Z_MT = Z_MT;
