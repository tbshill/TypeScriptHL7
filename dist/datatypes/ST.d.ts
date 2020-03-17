import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
export declare class ST extends HL7Obj {
    value: String;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
