
import fs from "node:fs/promises";

const jsonString = await fs.readFile("src/kappale03/data/h1/volcanos.json", "utf-8");
const volcanos = JSON.parse(jsonString);

const volcanos_sorted = [...volcanos].sort((a, b) => a.type.localeCompare(b.type))

console.log(volcanos_sorted);

