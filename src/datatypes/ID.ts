import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class ID extends HL7Obj {
    value = new String("");
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as ID]
    }
    fromString(input: string): void {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
