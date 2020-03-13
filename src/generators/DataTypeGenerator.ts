
const datatypeName = 'CN';
const children = [
    { name: 'id', datatype: 'ST' },
    { name: 'family_name', datatype: 'ST' },
    { name: 'given_name', datatype: 'ST' },
    { name: 'middle_name', datatype: 'ST' },
    { name: 'suffix', datatype: 'ST' },
    { name: 'prefix', datatype: 'ST' },
    { name: 'degree', datatype: 'ST' },
    { name: 'source_table', datatype: 'IS' },
    { name: 'assigning_authority', datatype: 'HD' },
];

function createChild(index: number, child: { name: string, datatype: string }) {
    return `\t/** -${index} */ ${child.name}: ${child.datatype} = new ${child.datatype}(this.depth.peekDown());`
}

function createHL7ObjArray(children: { name: string, datatype: string }[]) {
    let ret = '\thl7_obj_array = [\n';
    for (const child of children) {
        ret += `\t\tthis.${child.name},\n`
    }
    ret += '\t]\n';
    return ret;
}

function generateImports(children: { name: string, datatype: string }[]) {
    const setOfDatatypes: string[] = [];
    for (const child of children) {
        if (!setOfDatatypes.includes(child.datatype)) {
            setOfDatatypes.push(child.datatype);
        }
    }

    const importList = setOfDatatypes.map(datatype => `import { ${datatype} } from './${datatype}';`);
    return importList.join("\n");

}

export function generateDatatypeClass(name: string, children: { name: string, datatype: string }[]) {
    const imports = generateImports(children);
    const attributes = children.map((child, index) => createChild(index + 1, child)).join("\n");
    const obj_array = createHL7ObjArray(children);
    return `import { HL7Obj } from '../base/HL7Obj';
${imports}

export class ${name} extends HL7Obj {

${attributes}

${obj_array}
}
`
}