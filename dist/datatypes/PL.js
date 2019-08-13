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
var IS_1 = require("./IS");
var HD_1 = require("./HD");
var ST_1 = require("./ST");
//<point of care (IS )> ^ <room (IS )> ^ <bed (IS)> ^ <facility (HD)> ^ < location status (IS )> ^ <person location type (IS)> ^ <building (IS )> ^ <floor (IS )> ^ <location description (ST)>
var PL = /** @class */ (function (_super) {
    __extends(PL, _super);
    function PL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.point_of_care = new IS_1.IS(_this.depth.peekDown());
        _this.room = new IS_1.IS(_this.depth.peekDown());
        _this.bed = new IS_1.IS(_this.depth.peekDown());
        _this.facility = new HD_1.HD(_this.depth.peekDown());
        _this.location_status = new IS_1.IS(_this.depth.peekDown());
        _this.person_location_type = new IS_1.IS(_this.depth.peekDown());
        _this.building = new IS_1.IS(_this.depth.peekDown());
        _this.floor = new IS_1.IS(_this.depth.peekDown());
        _this.location_description = new ST_1.ST(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.point_of_care,
            _this.room,
            _this.bed,
            _this.facility,
            _this.location_status,
            _this.person_location_type,
            _this.building,
            _this.floor,
            _this.location_description,
        ];
        return _this;
    }
    return PL;
}(HL7Obj_1.HL7Obj));
exports.PL = PL;
