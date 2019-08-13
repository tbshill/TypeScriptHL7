"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepthEnum;
(function (DepthEnum) {
    DepthEnum[DepthEnum["SEGMENT"] = 0] = "SEGMENT";
    DepthEnum[DepthEnum["FEILD"] = 1] = "FEILD";
    DepthEnum[DepthEnum["COMPONENT"] = 2] = "COMPONENT";
    DepthEnum[DepthEnum["SUB_COMPONENT"] = 3] = "SUB_COMPONENT";
})(DepthEnum = exports.DepthEnum || (exports.DepthEnum = {}));
var Depth = /** @class */ (function () {
    function Depth(depth) {
        this.depth = depth;
    }
    Depth.prototype.getDelimeter = function () {
        switch (this.depth) {
            case DepthEnum.SEGMENT:
                return Depth.SEGMENT_DELIMETER;
            case DepthEnum.FEILD:
                return Depth.FEILD_DELIMETER;
            case DepthEnum.COMPONENT:
                return Depth.COMPONENT_DELIMETER;
            case DepthEnum.SUB_COMPONENT:
                return Depth.SUB_COMPONENT_DELIMETER;
        }
    };
    ;
    Depth.prototype.peekDown = function () {
        var peek_depth = this.depth + 1;
        if (peek_depth > 4) {
            peek_depth = 4;
        }
        return new Depth(peek_depth);
    };
    Depth.prototype.peekUp = function () {
        var peek_depth = this.depth - 1;
        if (peek_depth < 0) {
            peek_depth = 0;
        }
        return new Depth(peek_depth);
    };
    Depth.SEGMENT_DELIMETER = '\n';
    Depth.FEILD_DELIMETER = '|';
    Depth.COMPONENT_DELIMETER = '^';
    Depth.SUB_COMPONENT_DELIMETER = '&';
    Depth.REPEAT_DELIMETER = '~';
    return Depth;
}());
exports.Depth = Depth;
