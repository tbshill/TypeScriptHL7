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
var EI_1 = require("../EI");
//<parent's placer order number (EI)> ^ <parent's filler order number (EI)>
/**
 * CM for ORC-8 <parent>
 */
var Z_PA = /** @class */ (function (_super) {
    __extends(Z_PA, _super);
    function Z_PA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parents_placer_order_number = new EI_1.EI(_this.depth.peekDown());
        _this.parents_filler_order_number = new EI_1.EI(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.parents_placer_order_number,
            _this.parents_filler_order_number
        ];
        return _this;
    }
    return Z_PA;
}(HL7Obj_1.HL7Obj));
exports.Z_PA = Z_PA;
