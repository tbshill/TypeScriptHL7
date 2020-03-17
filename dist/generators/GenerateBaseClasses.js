"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DepthFile = `export enum DepthEnum {
    SEGMENT,
    FEILD,
    COMPONENT,
    SUB_COMPONENT
}
export class Depth {

    static SEGMENT_DELIMETER = '\\n';
    static FEILD_DELIMETER = '|';
    static COMPONENT_DELIMETER = '^';
    static SUB_COMPONENT_DELIMETER = '&';
    static REPEAT_DELIMETER = '~'

    constructor(private depth: DepthEnum) { }

    getDelimeter(): string {
        switch (this.depth) {
            case DepthEnum.SEGMENT:
                return Depth.SEGMENT_DELIMETER;
            case DepthEnum.FEILD:
                return Depth.FEILD_DELIMETER;
            case DepthEnum.COMPONENT:
                return Depth.COMPONENT_DELIMETER;
            case DepthEnum.SUB_COMPONENT:
                return Depth.SUB_COMPONENT_DELIMETER
        }
    };
    peekDown(): Depth {
        let peek_depth = this.depth + 1
        if (peek_depth > 4) {
            peek_depth = 4;
        }
        return new Depth(peek_depth);
    }
    peekUp(): Depth {
        let peek_depth = this.depth - 1
        if (peek_depth < 0) {
            peek_depth = 0;
        }
        return new Depth(peek_depth);
    }

}`;
const HL7ObjFile = `import { Depth } from './depth';

export class HL7Obj {
    protected hl7_obj_array: HL7Obj[] = [];

    constructor(protected depth: Depth) { }

    setDepth(newDepth: Depth): HL7Obj {
        this.depth = newDepth;
        return this;
    }

    fromString(input: String): void {
        if (input == undefined) {
            this.hl7_obj_array.forEach(value => {
                value.fromString('');
            })
        }
        const splits = input.split(this.depth.peekDown().getDelimeter());
        for (let split_index = 0; split_index < this.hl7_obj_array.length; split_index++) {

            this.hl7_obj_array[split_index]
                .setDepth(this.depth.peekDown())
                .fromString(splits[split_index] || '');

        }

    }
    toString(): String {

        const stringify = this.hl7_obj_array.map(value => {
            return value.setDepth(this.depth.peekDown()).toString();
        })
        let ret = stringify.join(this.depth.peekDown().getDelimeter());
        ret = this.removeTrailingDelimeter(ret);
        return ret;
    }

    private removeTrailingDelimeter(input: string): string {
        const delim = this.depth.peekDown().getDelimeter();
        if (input.length <= 0) {
            return input
        }


        if (input[input.length - 1] == delim) {
            return this.removeTrailingDelimeter(input.substring(0, input.length - 1));
        } else {
            return input;
        }
    }
}`;
async function GenerateDepth(workspace) {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(path_1.default.join(workspace, 'base', 'depth.ts'), DepthFile, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.GenerateDepth = GenerateDepth;
async function GenerateHL7Obj(workspace) {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(path_1.default.join(workspace, 'base', 'HL7Obj.ts'), DepthFile, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
}
exports.GenerateHL7Obj = GenerateHL7Obj;
