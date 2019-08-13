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
// <identifier (ST)> ^ <text (ST)> ^ <name of coding system (ST)> ^ <alternate identifier (ST)> ^ <alternate text (ST)> ^ <name of alternate coding system (ST)>
var CE = /** @class */ (function (_super) {
    __extends(CE, _super);
    function CE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** -1 */ _this.id = new ST_1.ST(_this.depth.peekDown());
        /** -2 */ _this.text = new ST_1.ST(_this.depth.peekDown());
        /** -3 */ _this.coding_system_name = new ST_1.ST(_this.depth.peekDown());
        /** -4 */ _this.alternate_id = new ST_1.ST(_this.depth.peekDown());
        /** -5 */ _this.alternate_text = new ST_1.ST(_this.depth.peekDown());
        /** -6 */ _this.alternate_coding_system_name = new ST_1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.id,
            _this.text,
            _this.coding_system_name,
            _this.alternate_id,
            _this.alternate_text,
            _this.alternate_coding_system_name,
        ];
        return _this;
    }
    return CE;
}(HL7Obj_1.HL7Obj));
exports.CE = CE;
