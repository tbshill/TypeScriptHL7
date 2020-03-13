import fs from 'fs';
import path from 'path';
import { GenerateDepth, GenerateHL7Obj } from './GenerateBaseClasses';
import { GeneratePrimitiveDatatypes } from './GeneratePrimativeDatatypes';
import { downloadAndGenerateDatatypes } from './DownloadDatatypeDefinitions';

export async function buildWorkspace(filePath: string) {
    await createFolder(filePath);
    await Promise.all([
        createFolder(path.join(filePath, 'base')),
        createFolder(path.join(filePath, 'datatypes')),
        createFolder(path.join(filePath, 'segments')),
        createFolder(path.join(filePath, 'messages')),
    ]);

    await Promise.all([
        GenerateDepth(filePath),
        GenerateHL7Obj(filePath),
        GeneratePrimitiveDatatypes(filePath),
        downloadAndGenerateDatatypes(filePath)
    ]);
}

async function createFolder(filePath: string) {
    return new Promise((resolve, reject) => {
        fs.exists(filePath, (exists) => {
            if (!exists) {
                fs.mkdir(filePath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                })
            } else {
                resolve();
            }
        })
    })
}

const args = process.argv.slice(2);
buildWorkspace(args[0]);