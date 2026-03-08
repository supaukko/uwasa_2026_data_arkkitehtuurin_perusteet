import { writeFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DATA_DIR = "data";

const getFilePath = (fileName) => path.join(DATA_DIR, fileName);

const ensureDataDir = async () => {
  await mkdir(DATA_DIR, { recursive: true });
};

export const saveText = async (text, fileName) => {
  const filePath = getFilePath(fileName);
  console.log("saveText:", filePath);

  await ensureDataDir();
  await writeFile(filePath, text);
};

export const saveJSON = async (data, fileName, pretty = true) => {
  const filePath = getFilePath(fileName);
  console.log("saveJSON:", filePath);

  await ensureDataDir();
  await writeFile(filePath,
    pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
  );
};

export const readJSON = async (fileName) => {
  const filePath = getFilePath(fileName);
  console.log("readJSON:", filePath);

  const text = await readFile(filePath, "utf8");
  return JSON.parse(text);
};