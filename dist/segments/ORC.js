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
var depth_1 = require("../base/depth");
var datatypes_1 = require("../datatypes");
var ORC = /** @class */ (function (_super) {
    __extends(ORC, _super);
    function ORC() {
        var _this = _super.call(this, new depth_1.Depth(depth_1.DepthEnum.SEGMENT)) || this;
        /** ORC-0 */ _this.segment = new datatypes_1.ST(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-1 */ _this.order_control = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-2 */ _this.placer_order_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-3 */ _this.filler_order_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-4 */ _this.placer_groupe_number = new datatypes_1.EI(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-5 */ _this.order_status = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-6 */ _this.response_flag = new datatypes_1.ID(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-7 */ _this.quantity_timing = new datatypes_1.TQ(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-8 */ _this.parent = new datatypes_1.Z_PA(new depth_1.Depth(depth_1.DepthEnum.FEILD)); // TODO: Build THis
        /** ORC-9 */ _this.datetime_transaction = new datatypes_1.TS(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-10 */ _this.entered_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-11 */ _this.verified_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-12 */ _this.ordering_provider = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-13 */ _this.enterers_location = new datatypes_1.PL(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-14 */ _this.call_back_phone_number = new datatypes_1.XTN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-15 */ _this.order_effective_datetime = new datatypes_1.TS(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-16 */ _this.order_control_code_reason = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-17 */ _this.entering_organization = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-18 */ _this.entering_device = new datatypes_1.CE(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        /** ORC-19 */ _this.action_by = new datatypes_1.XCN(new depth_1.Depth(depth_1.DepthEnum.FEILD));
        _this.hl7_obj_array = [
            _this.segment,
            _this.order_control,
            _this.placer_order_number,
            _this.filler_order_number,
            _this.placer_groupe_number,
            _this.order_status,
            _this.response_flag,
            _this.quantity_timing,
            _this.parent,
            _this.datetime_transaction,
            _this.entered_by,
            _this.verified_by,
            _this.ordering_provider,
            _this.enterers_location,
            _this.call_back_phone_number,
            _this.order_effective_datetime,
            _this.order_control_code_reason,
            _this.entering_organization,
            _this.entering_device,
            _this.action_by,
        ];
        return _this;
    }
    return ORC;
}(HL7Obj_1.HL7Obj));
exports.ORC = ORC;
