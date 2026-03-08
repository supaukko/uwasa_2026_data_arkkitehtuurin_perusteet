
import { faker } from "@faker-js/faker";

const generatePlanet = (id) => ({
  id: id,
  name: faker.word.sample(),
  distanceFromEarth: faker.number.int({ min: 1, max: 1000000 }), // valovuotta
  galaxy: faker.helpers.arrayElement([
    "Milky Way",
    "Andromeda",
    "Triangulum",
    "Sombrero",
    "Whirlpool"
  ]),
  diameter: faker.number.int({ min: 1000, max: 150000 }) // km
});

export default generatePlanet;