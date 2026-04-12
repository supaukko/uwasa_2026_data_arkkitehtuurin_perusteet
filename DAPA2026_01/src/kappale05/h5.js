import fs from "node:fs/promises";

const gamesJsonString = await fs.readFile("src/kappale05/data/games.json", "utf-8");
const hockeyGames = JSON.parse(gamesJsonString);

//Funktio on valmis
const parseDateWithTime = (dateTimeString) => {
    //const dateString = "2022-09-01 04:57:05.290";
    const parsedDate = new Date(dateTimeString.replace(" ", "T") + "Z");
    return parsedDate
}

//Lasketaan kesto MINUTEISSA
const addGameDuration = (game) => {

    const diff = Math.abs(parseDateWithTime(game.endTime) - parseDateWithTime(game.startTime));

    return {...game, duration: Math.floor((diff/1000)/60) };
//    return {...game, duration: ((diff/1000)/60) };
}

// TESTIFUNKTIO KUTSUU TÄTÄ FUNKTIOTA
const addGameDurations = (games) => {
    return games.map(game => addGameDuration(game));
}


//TESTIFUNKTIO KUTSUU TÄTÄ FUNKTIOTA
const addScoreDifferences = (games) => {
    return games.map(game => addScoreDifference(game));
}

// Voit käyttää samaa tekniikkaa, kun millä päivämäärät 
//parsitaan dateUtilsissa väliviivalla erotetusta
//päivämäärämuodosta erillisiksi arvoiksi
const addScoreDifference = (game) => {
    const [homeScore, visitorScore] = game.score.split("-");
    return {...game, scoreDifference: Math.abs(Number(homeScore) - Number(visitorScore)) }
}

const games = addGameDurations(addScoreDifferences(hockeyGames));
console.log(games);
