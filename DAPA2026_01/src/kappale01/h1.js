import { saveJSON } from "../utils/utils.js";
import generateCity from "../utils/generateCity.js";

const cities = Array.from({ length: 100 }, (_, index) => generateCity(index + 1));
await saveJSON(cities, "cities.json", false)
