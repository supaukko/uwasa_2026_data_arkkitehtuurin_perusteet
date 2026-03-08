import { saveJSON, readJSON } from "../utils/utils.js";
import { objectsToCSV } from "../utils/csvUtils.js";
import generatePlanet from "../utils/generatePlanet.js";

const planetToCSV = (planet, delimiter = ";") => {
  return `${planet.name}${delimiter}${planet.diameter}`;
};

const planetList = Array.from({ length: 10 }, (_, index) => generatePlanet(index + 1));
await saveJSON(planetList, "planets.json", false)
const planets = await readJSON('planets.json')

const planetsCSVText = planets.map(planet => planetToCSV(planet)).join('\n')
console.log(planetsCSVText)

const planetsCSVText2 = objectsToCSV(planets, ";")
console.log(planetsCSVText2)
