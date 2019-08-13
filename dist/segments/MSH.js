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
var MSH = /** @class */ (function (_super) {
    __extends(MSH, _super);
    function MSH() {
        var _this = _super.call(this, new depth_1.Depth(depth_1.DepthEnum.SEGMENT)) || this;
        /** MSH-0*/ _this.segment = new datatypes_1.ST(_this.depth.peekDown());
        /** MSH-1*/ _this.field_separators = new datatypes_1.ST(_this.depth.peekDown());
        /** MSH-2*/ _this.encoding_characters = new datatypes_1.ST(_this.depth.peekDown());
        /** MSH-3*/ _this.sending_application = new datatypes_1.HD(_this.depth.peekDown());
        /** MSH-4*/ _this.sending_facility = new datatypes_1.HD(_this.depth.peekDown());
        /** MSH-5*/ _this.receiving_application = new datatypes_1.HD(_this.depth.peekDown());
        /** MSH-6*/ _this.receiving_facility = new datatypes_1.HD(_this.depth.peekDown());
        /** MSH-7*/ _this.datetime = new datatypes_1.TS(_this.depth.peekDown());
        // /** MSH-8*/security: ST = new ST(this.depth.peekDown());
        /** MSH-9*/ _this.message_type = new datatypes_1.Z_MT(_this.depth.peekDown());
        /** MSH-10*/ _this.message_control_id = new datatypes_1.ST(_this.depth.peekDown());
        /** MSH-11*/ _this.processing_id = new datatypes_1.PT(_this.depth.peekDown());
        /** MSH-12*/ _this.version_id = new datatypes_1.ID(_this.depth.peekDown());
        /** MSH-13*/ _this.sequence_number = new datatypes_1.NM(_this.depth.peekDown());
        /** MSH-14*/ _this.continuation_pointer = new datatypes_1.ST(_this.depth.peekDown());
        /** MSH-15*/ _this.accept_ack_type = new datatypes_1.ID(_this.depth.peekDown());
        /** MSH-16*/ _this.application_ack_type = new datatypes_1.ID(_this.depth.peekDown());
        /** MSH-17*/ _this.country_code = new datatypes_1.ID(_this.depth.peekDown());
        /** MSH-18*/ _this.character_set = new datatypes_1.ID(_this.depth.peekDown());
        /** MSH-19*/ _this.principal_language = new datatypes_1.CE(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.segment,
            _this.field_separators,
            _this.encoding_characters,
            _this.sending_application,
            _this.sending_facility,
            _this.receiving_application,
            _this.receiving_facility,
            _this.datetime,
            // this.security,
            _this.message_type,
            _this.message_control_id,
            _this.processing_id,
            _this.version_id,
            _this.sequence_number,
            _this.continuation_pointer,
            _this.accept_ack_type,
            _this.application_ack_type,
            _this.country_code,
            _this.character_set,
            _this.principal_language,
        ];
        return _this;
    }
    return MSH;
}(HL7Obj_1.HL7Obj));
exports.MSH = MSH;
