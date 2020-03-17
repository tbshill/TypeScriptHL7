"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HL7Obj {
    constructor(depth) {
        this.depth = depth;
        this.hl7_obj_array = [];
    }
    setDepth(newDepth) {
        this.depth = newDepth;
        return this;
    }
    fromString(input) {
        if (input == undefined) {
            this.hl7_obj_array.forEach(value => {
                value.fromString('');
            });
        }
        const splits = input.split(this.depth.peekDown().getDelimeter());
        for (let split_index = 0; split_index < this.hl7_obj_array.length; split_index++) {
            this.hl7_obj_array[split_index]
                .setDepth(this.depth.peekDown())
                .fromString(splits[split_index] || '');
        }
    }
    toString() {
        const stringify = this.hl7_obj_array.map(value => {
            return value.setDepth(this.depth.peekDown()).toString();
        });
        let ret = stringify.join(this.depth.peekDown().getDelimeter());
        ret = this.removeTrailingDelimeter(ret);
        return ret;
    }
    removeTrailingDelimeter(input) {
        const delim = this.depth.peekDown().getDelimeter();
        if (input.length <= 0) {
            return input;
        }
        if (input[input.length - 1] == delim) {
            return this.removeTrailingDelimeter(input.substring(0, input.length - 1));
        }
        else {
            return input;
        }
    }
}
exports.HL7Obj = HL7Obj;
