import fs from "node:fs/promises";

const airportsJsonString = await fs.readFile("src/kappale05/data/airports.json", "utf-8");
const airports = JSON.parse(airportsJsonString);

const flightsJsonString = await fs.readFile("src/kappale05/data/flights.json", "utf-8");
const flights = JSON.parse(flightsJsonString);

// console.log(airports);
// console.log(flights);

const mapAndTransformFlightAndAirport = (flight, airport) => {
  if (flight?.from === airport?.code) {
    return {
      ...flight,
      airport: {...airport}
      // name: airport.name,
      // country: airport.country
    }
  }

  return flight;
}

const map1 = mapAndTransformFlightAndAirport(flights[0], airports[0]);

console.log(map1);