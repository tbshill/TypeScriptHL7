import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class SI extends HL7Obj {
    value = new Number();
    private shouldBeBlank = false;
    private isNumericalCharacter(input: String): Boolean {
        if (input !== '') {
            if (input[0] >= '0' && input[0] <= '9') {
                return true;
            }
        }
        return false;
    }
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as SI]
    }
    fromString(input: string): void {
        this.shouldBeBlank = !this.isNumericalCharacter(input);
        this.value = Number(input);
        console.log(this.value);
        console.log(this.shouldBeBlank);
    }
    toString() {
        if (this.shouldBeBlank) {
            return '';
        }
        return this.value.toString();
    }
}
