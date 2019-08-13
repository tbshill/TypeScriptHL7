import { Depth } from './depth';

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
}