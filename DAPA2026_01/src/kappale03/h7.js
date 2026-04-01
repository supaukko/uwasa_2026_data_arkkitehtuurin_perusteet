/**
Toteuta funktio convertDateString siten, että se muuntaa päivämäärän muodosta:
yyyy-kk-pp muotoon pp/k/vvvv. (Huomaa kuukausi tulee automaattisesti nyt yksinumeroisena, se on ok)
Mallia löytyy luentomateriaalista. 

Luo uusipäivämäärämerkkijono uudessa muodossa palasista, jotka splittasit alkuperäisestä päivämäärästä. 

Päivämäärän validointi on haastavaa, ja siksi sitä ei edellytetä tässä. Jos kuitenkin haluat kokeilla sen toteuttaa,
tehtävästä saa extra pisteitä. Tarkista parametrina saatu päivämäärä ja anna poikkeus, jos se ei ole validi.
ChatGPT voi osata kertoa, miten päivämäärä kannattaa validoida. (validi=päivämäärä on olemassa. esim.
karkausvuosina helmikuussa on 29 pv muuten 28). 
*/

const toInt = (strValue) => {
  const parsed = Number.parseInt(strValue, 10);
  if (Number.isNaN(parsed)) {
    throw new TypeError(`Invalid int value: "${strValue}"`)
  }
  return parsed;
}


function convertDateString(dateString) {
    if (!dateString) {
        throw new TypeError(`Invalid input: "${dateString}"`)
    }
    const parts = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (!Array.isArray(parts) || !parts.length) {
        throw new TypeError(`Invalid input format: "${dateString}"`)
    }

    const year = toInt(parts[1]);
    const month = toInt(parts[2]);
    const day = toInt(parts[3]);

    const date = new Date(year, month - 1, day);

    if (date.getFullYear() !== year || date.getMonth() !== month - 1 ||
        date.getDate() !== day) {
        throw new TypeError(`Invalid date: "${dateString}"`);
    }

    const formattedDay = ('0'+ date.getDate()).slice(-2)
    const result = `${formattedDay}/${date.getMonth() + 1}/${date.getFullYear()}`;
    console.log(result);
    return result;
}

convertDateString(dateString)