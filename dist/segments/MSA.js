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
var datatypes_1 = require("../datatypes");
var depth_1 = require("../base/depth");
var MSA = /** @class */ (function (_super) {
    __extends(MSA, _super);
    function MSA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** MSA-0 */ _this.segment = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-1 */ _this.ack_code = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-2 */ _this.message_control_id = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-3 */ _this.text_message = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-4 */ _this.expected_sequence = new datatypes_1.NM(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-5 */ _this.delayed_ack_type = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** MSA-6 */ _this.error_condition = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        _this.hl7_obj_array = [
            _this.ack_code,
            _this.message_control_id,
            _this.text_message,
            _this.expected_sequence,
            _this.delayed_ack_type,
            _this.error_condition
        ];
        return _this;
    }
    return MSA;
}(HL7Obj_1.HL7Obj));
exports.MSA = MSA;
