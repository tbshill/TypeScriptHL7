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
var IS_1 = require("./IS");
var ID_1 = require("./ID");
//<entity identifier (ST)> ^ <namespace ID (IS)> ^ <universal ID (ST)> ^ <universal ID type (ID)>
var EI = /** @class */ (function (_super) {
    __extends(EI, _super);
    function EI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.entity_id = new ST_1.ST(_this.depth.peekDown());
        _this.namespace_id = new IS_1.IS(_this.depth.peekDown());
        _this.universal_id = new ST_1.ST(_this.depth.peekDown());
        _this.universal_id_type = new ID_1.ID(_this.depth.peekDown());
        _this.hl7_obj_array = [
            _this.entity_id,
            _this.namespace_id,
            _this.universal_id,
            _this.universal_id_type
        ];
        return _this;
    }
    return EI;
}(HL7Obj_1.HL7Obj));
exports.EI = EI;
