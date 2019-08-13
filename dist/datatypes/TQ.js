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
var TQ = /** @class */ (function (_super) {
    __extends(TQ, _super);
    function TQ() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.quantity = new _1.ST(_this.depth.peekDown()); // FIXME: Should be CQ
        _this.interval = new _1.ST(_this.depth.peekDown());
        _this.duration = new _1.ST(_this.depth.peekDown());
        _this.start_datetime = new _1.TS(_this.depth.peekDown());
        _this.end_datetime = new _1.TS(_this.depth.peekDown());
        _this.priority = new _1.ID(_this.depth.peekDown());
        _this.condition = new _1.ST(_this.depth.peekDown());
        _this.text = new _1.TX(_this.depth.peekDown());
        _this.conjunction = new _1.ID(_this.depth.peekDown());
        _this.order_sequencing = new _1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.quantity,
            _this.interval,
            _this.duration,
            _this.start_datetime,
            _this.end_datetime,
            _this.priority,
            _this.condition,
            _this.text,
            _this.conjunction,
            _this.order_sequencing,
        ];
        return _this;
    }
    return TQ;
}(HL7Obj_1.HL7Obj));
exports.TQ = TQ;
