import path from "path";
import fsPromises from "fs/promises";

export async function getLocalData() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData: any = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
}
