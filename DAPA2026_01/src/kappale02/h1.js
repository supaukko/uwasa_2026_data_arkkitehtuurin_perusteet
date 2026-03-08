import { faker } from "@faker-js/faker";
import { saveJSON } from "../utils/utils.js";

const generateTuote = (id) => {
    return {
    tuoteId: id,
    tuoteNimi: faker.commerce.productName(),
    tuoteRyhma: faker.commerce.department(),
    valmistaja: faker.company.name()
  };
}

const generateAsiakas = (id) => {
    return {
    asiakasId: id,
    asiakasNimi: faker.person.fullName(),
    kaupunki: faker.location.city(),
    maa: faker.location.country(),
    postinNumero: faker.location.zipCode(),
    asiakasRyhma: faker.helpers.arrayElement([
        "basic",
        "standard",
        "premium",
        "gold"])
  };
}

const generateAjat = () => {
  const result = [];
  let aikaId = 0;

  for (let year = 2000; year <= 2002; year++) {
    for (let month = 1; month <= 12; month++) {
      const lastDayOfMonth = new Date(year, month, 0).getDate();

      for (let day = 1; day <= lastDayOfMonth; day++) {
        result.push({
          aikaId,
          paiva: day,
          kuukausi: month,
          vuosi: year,
          kvartaali: Math.ceil(month / 3)
        });

        aikaId++;
      }
    }
  }

  return result;
};

const generateMyynti = (asiakkaat, tuotteet, ajat, count = 100) => {
  const myynnit = [];

  for (let i = 0; i < count; i++) {
    const asiakas = faker.helpers.arrayElement(asiakkaat);
    const tuote = faker.helpers.arrayElement(tuotteet);
    const aika = faker.helpers.arrayElement(ajat);

    const maara = faker.number.int({ min: 1, max: 100 });
    const yksikkohinta = Number(faker.commerce.price({ min: 5, max: 500 }));
    const tilauksenKokHinta = Number((maara * yksikkohinta).toFixed(2));

    myynnit.push({
      aikaId: aika.aikaId,
      asiakasId: asiakas.asiakasId,
      tuoteId: tuote.tuoteId,
      maara,
      yksikkohinta,
      tilauksenKokHinta
    });
  }

  return myynnit;
};


const tuotteet = Array.from({ length: 20 }, (_, index) => generateTuote(index + 1));
console.log(tuotteet)
await saveJSON(tuotteet, "k2/dimtuote.json", false)

const asiakkaat = Array.from({ length: 10 }, (_, index) => generateAsiakas(index + 1));
console.log(asiakkaat)
await saveJSON(asiakkaat, "k2/dimasiakas.json", false)

const ajat = generateAjat();
console.log(ajat.slice(50, 70));
await saveJSON(ajat, "k2/dimaika.json", false)

const myynti = generateMyynti(asiakkaat, tuotteet, ajat, 100);
console.log(myynti);
await saveJSON(myynti, "k2/factmyynti.json", false)
