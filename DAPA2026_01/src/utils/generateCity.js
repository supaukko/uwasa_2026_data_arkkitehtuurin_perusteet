
import { faker } from "@faker-js/faker";
const generateCity = (id) => {
    return {
    id: id,
    name: faker.location.city(),
    age: faker.number.int({ min: 100, max: 4000 }),
    averageTemperature: faker.number.int({ min: -20, max: 35 }),
    population: faker.number.int({ min: 10000, max: 5000000 }),
    mayor: faker.person.fullName()
  };
 }

 export default generateCity;