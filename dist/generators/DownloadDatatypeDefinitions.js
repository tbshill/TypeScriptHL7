"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DataTypeGenerator_1 = require("./DataTypeGenerator");
async function getListOfDatatypes() {
    return new Promise(async (resolve, reject) => {
        const apiResponse = await axios_1.default.get('https://hl7-definition.caristix.com/v2-api/1/HL7v2.7/DataTypes');
        resolve(apiResponse.data.map((summary) => summary.id).filter((val) => val.length <= 3));
    });
}
async function getDatatype(dtName) {
    return new Promise(async (resolve, reject) => {
        const apiResponse = await axios_1.default.get(`https://hl7-definition.caristix.com/v2-api/1/HL7v2.7/DataTypes/${dtName}`);
        resolve({ name: apiResponse.data.id, fields: apiResponse.data.fields.map((dt) => { return { name: adjustName(dt.name), datatype: dt.dataType }; }) });
    });
}
function adjustName(name) {
    return name.toLowerCase().replace(/\W/g, "_").replace(/_+/g, '_');
}
async function downloadAndGenerateDatatypes(workspace) {
    const list = await getListOfDatatypes();
    const dtDetails = await Promise.all(list.map(dt => getDatatype(dt)));
    for (const i in list) {
        const dtName = list[i];
        const dtChildren = dtDetails[i];
        if (dtChildren.fields.length > 0) {
            const generatedCode = DataTypeGenerator_1.generateDatatypeClass(dtName, dtChildren.fields);
            fs_1.default.writeFile(path_1.default.join(workspace, 'datatypes', `${dtName}.ts`), generatedCode, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
        else {
            fs_1.default.exists(path_1.default.join(workspace, 'datatypes', `${dtName}.ts`), (exists) => {
                if (!exists) {
                    console.log('\x1b[33m%s\x1b[0m', `Please submit issue to include new primitive: ${dtName}`);
                }
            });
        }
    }
}
exports.downloadAndGenerateDatatypes = downloadAndGenerateDatatypes;
