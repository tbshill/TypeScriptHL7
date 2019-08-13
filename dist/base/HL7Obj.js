"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HL7Obj = /** @class */ (function () {
    function HL7Obj(depth) {
        this.depth = depth;
        this.hl7_obj_array = [];
    }
    HL7Obj.prototype.setDepth = function (newDepth) {
        this.depth = newDepth;
        return this;
    };
    HL7Obj.prototype.fromString = function (input) {
        if (input == undefined) {
            this.hl7_obj_array.forEach(function (value) {
                value.fromString('');
            });
        }
        var splits = input.split(this.depth.peekDown().getDelimeter());
        for (var split_index = 0; split_index < this.hl7_obj_array.length; split_index++) {
            this.hl7_obj_array[split_index]
                .setDepth(this.depth.peekDown())
                .fromString(splits[split_index] || '');
        }
    };
    HL7Obj.prototype.toString = function () {
        var _this = this;
        var stringify = this.hl7_obj_array.map(function (value) {
            return value.setDepth(_this.depth.peekDown()).toString();
        });
        var ret = stringify.join(this.depth.peekDown().getDelimeter());
        ret = this.removeTrailingDelimeter(ret);
        return ret;
    };
    HL7Obj.prototype.removeTrailingDelimeter = function (input) {
        var delim = this.depth.peekDown().getDelimeter();
        if (input.length <= 0) {
            return input;
        }
        if (input[input.length - 1] == delim) {
            return this.removeTrailingDelimeter(input.substring(0, input.length - 1));
        }
        else {
            return input;
        }
    };
    return HL7Obj;
}());
exports.HL7Obj = HL7Obj;
