"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function createChild(index, child) {
    return `\t/** -${index} */ ${child.name}: ${child.datatype} = new ${child.datatype}(this.depth.peekDown());`;
}
function createHL7ObjArray(children) {
    let ret = '\thl7_obj_array = [\n';
    for (const child of children) {
        ret += `\t\tthis.${child.name},\n`;
    }
    ret += '\t]\n';
    return ret;
}
function generateImports(children) {
    const setOfDatatypes = [];
    for (const child of children) {
        if (!setOfDatatypes.includes(child.datatype)) {
            setOfDatatypes.push(child.datatype);
        }
    }
    const importList = setOfDatatypes.map(datatype => `import { ${datatype} } from './${datatype}';`);
    return importList.join("\n");
}
function generateDatatypeClass(name, children) {
    const imports = generateImports(children);
    const attributes = children.map((child, index) => createChild(index + 1, child)).join("\n");
    const obj_array = createHL7ObjArray(children);
    return `import { HL7Obj } from '../base/HL7Obj';
${imports}

export class ${name} extends HL7Obj {

${attributes}

${obj_array}
}
`;
}
exports.generateDatatypeClass = generateDatatypeClass;
