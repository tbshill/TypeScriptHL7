import { Depth } from './depth';
export declare class HL7Obj {
    protected depth: Depth;
    protected hl7_obj_array: HL7Obj[];
    constructor(depth: Depth);
    setDepth(newDepth: Depth): HL7Obj;
    fromString(input: String): void;
    toString(): String;
    private removeTrailingDelimeter;
}
