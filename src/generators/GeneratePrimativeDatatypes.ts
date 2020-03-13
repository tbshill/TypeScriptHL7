import fs from 'fs'
import path from 'path'

const primatives: { [key: string]: string } = {
    NM: `
import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class NM extends HL7Obj {
    value = new Number();
    private shouldBeBlank = true;
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
        this.hl7_obj_array = [(this.value as unknown) as NM]
    }
    fromString(input: string): void {
        this.shouldBeBlank = !this.isNumericalCharacter(input);
        this.value = Number(input);
        // console.log(this.value);
        // console.log(this.shouldBeBlank);
    }
    toString() {
        if (this.shouldBeBlank) {
            return '';
        }
        return this.value.toString();
    }
}
`,
    DT: `
import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

//FIXME: Fix this
export class DT extends HL7Obj {
    value = new String("");
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as DT]
    }
    fromString(input: string): void {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
`,

    ID: `import { HL7Obj } from '../base/HL7Obj';
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
`,

    SI: `import { HL7Obj } from '../base/HL7Obj';
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
`,
    ST: `
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
`,
    TX: `import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class TX extends HL7Obj {
    value = new String("");
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as TX]
    }
    fromString(input: string): void {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
`,
    IS: `import { HL7Obj } from '../base/HL7Obj';
import { Depth } from '../base/depth';

export class IS extends HL7Obj {
    value = new String("");
    constructor(depth: Depth) {
        super(depth);
        this.hl7_obj_array = [(this.value as unknown) as IS]
    }
    fromString(input: string): void {
        this.value = input;
    }
    toString() {
        return this.value;
    }
}
`

}


export function GeneratePrimitiveDatatypes(workspace: string) {
    const promises = [];
    for (const datatype in primatives) {
        promises.push(new Promise((resolve, reject) => {
            fs.writeFile(path.join(workspace, 'datatypes', `${datatype}.ts`), primatives[datatype], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        }))
    }
    return Promise.all(promises);
}