import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
export declare class ID extends HL7Obj {
    value: String;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): String;
}
