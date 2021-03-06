import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class SI extends HL7Obj {
    value = new Number();
    private shouldBeBlank = false;

    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as SI]
    }
    fromString(input: string): void {
        if (input == undefined || input == '') {
            this.shouldBeBlank = true;
        } else {
            this.shouldBeBlank = false;
            this.value = Number(input) || input as any;
        }
    }
    toString() {
        if (this.value == null) {
            return "\"\"";
        }

        if (this.shouldBeBlank) {
            return "";
        }
        return this.value.toString();
    }
}
