import axios from "axios";
import fs from 'fs';
import path from 'path';
import { generateDatatypeClass } from './DataTypeGenerator';

async function getListOfDatatypes() {
    return new Promise<string[]>(async (resolve, reject) => {
        const apiResponse = await axios.get('https://hl7-definition.caristix.com/v2-api/1/HL7v2.7/DataTypes');
        resolve(apiResponse.data.map((summary: any) => summary.id).filter((val: string) => val.length <= 3));
    })
}


async function getDatatype(dtName: string) {
    return new Promise<{ name: string, fields: any[] }>(async (resolve, reject) => {
        const apiResponse = await axios.get(`https://hl7-definition.caristix.com/v2-api/1/HL7v2.7/DataTypes/${dtName}`);
        resolve({ name: apiResponse.data.id, fields: apiResponse.data.fields.map((dt: any) => { return { name: adjustName(dt.name), datatype: dt.dataType } }) })
    })
}

function adjustName(name: string) {
    return name.toLowerCase().replace(/\W/g, "_").replace(/_+/g, '_');
}

export async function downloadAndGenerateDatatypes(workspace: string) {

    const list = await getListOfDatatypes();
    const dtDetails = await Promise.all(list.map(dt => getDatatype(dt)));
    for (const i in list) {
        const dtName = list[i];
        const dtChildren = dtDetails[i];

        if (dtChildren.fields.length > 0) {
            const generatedCode = generateDatatypeClass(dtName, dtChildren.fields);
            fs.writeFile(path.join(workspace, 'datatypes', `${dtName}.ts`), generatedCode, (err) => {
                if (err) {
                    console.error(err);
                }
            })

        } else {
            fs.exists(path.join(workspace, 'datatypes', `${dtName}.ts`), (exists) => {
                if (!exists) {
                    console.log('\x1b[33m%s\x1b[0m', `Please submit issue to include new primitive: ${dtName}`)
                }
            })
        }
    }
}