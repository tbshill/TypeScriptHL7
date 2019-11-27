
import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class ST extends HL7Obj {
    value = new String("");
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as ST]
    }
    fromString(input: string): void {
        this.value = input;
    }
    toString(): string {
        return this.value as string;
    }
}
