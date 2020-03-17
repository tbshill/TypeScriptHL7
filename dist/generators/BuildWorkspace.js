"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const GenerateBaseClasses_1 = require("./GenerateBaseClasses");
const GeneratePrimativeDatatypes_1 = require("./GeneratePrimativeDatatypes");
const DownloadDatatypeDefinitions_1 = require("./DownloadDatatypeDefinitions");
async function buildWorkspace(filePath) {
    await createFolder(filePath);
    await Promise.all([
        createFolder(path_1.default.join(filePath, 'base')),
        createFolder(path_1.default.join(filePath, 'datatypes')),
        createFolder(path_1.default.join(filePath, 'segments')),
        createFolder(path_1.default.join(filePath, 'messages')),
    ]);
    await Promise.all([
        GenerateBaseClasses_1.GenerateDepth(filePath),
        GenerateBaseClasses_1.GenerateHL7Obj(filePath),
        GeneratePrimativeDatatypes_1.GeneratePrimitiveDatatypes(filePath),
        DownloadDatatypeDefinitions_1.downloadAndGenerateDatatypes(filePath)
    ]);
}
exports.buildWorkspace = buildWorkspace;
async function createFolder(filePath) {
    return new Promise((resolve, reject) => {
        fs_1.default.exists(filePath, (exists) => {
            if (!exists) {
                fs_1.default.mkdir(filePath, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
            else {
                resolve();
            }
        });
    });
}
const args = process.argv.slice(2);
buildWorkspace(args[0]);
