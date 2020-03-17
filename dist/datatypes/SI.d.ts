import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';
export declare class SI extends HL7Obj {
    value: Number;
    private shouldBeBlank;
    constructor(depth: Depth);
    fromString(input: string): void;
    toString(): string;
}
