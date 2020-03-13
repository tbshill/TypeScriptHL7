function generateImports(children: { name: string, datatype: string }[]) {
    const setOfDatatypes: string[] = [];
    for (const child of children) {
        if (!setOfDatatypes.includes(child.datatype)) {
            setOfDatatypes.push(child.datatype);
        }
    }
    const importList = setOfDatatypes.join(", ");
    return `import { ${importList} } from '../datatypes';`;
}

function createHL7ObjArray(children: { name: string, datatype: string }[]) {
    let ret = '\thl7_obj_array = [\n';
    for (const child of children) {
        ret += `\t\tthis.${child.name},\n`
    }
    ret += '\t]\n';
    return ret;
}

function createChild(index: number, child: { name: string, datatype: string }) {
    return `\t/** -${index} */ ${child.name}: ${child.datatype} = new ${child.datatype}(this.depth.peekDown());`
}

export function generateSegmentClass(name: string, children: { name: string, datatype: string }[]) {
    const imports = generateImports(children);
    const attributes = children.map((child, index) => createChild(index + 1, child)).join("\n");
    const obj_array = createHL7ObjArray(children);
    return `import { HL7Obj } from '../base/HL7Obj';
import { Depth, DepthEnum } from '../base/depth';
${imports}

export class ${name} extends HL7Obj {
\tconstructor() {
\t\tsuper(new Depth(DepthEnum.SEGMENT));
\t}

${attributes}

${obj_array}
}
`
}