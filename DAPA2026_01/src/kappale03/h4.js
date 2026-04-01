import { da } from "@faker-js/faker";
import { csvToObjects } from "../utils/csvUtils.js";
import fs from "node:fs/promises";

let filtered_data = []
let volcano_event_data=[]


const recent_and_big_eruptions = (data) => {
   return data.filter(item => {
        const year = Number(item.year);
        const vei = Number(item.vei);
        return !Number.isNaN(year) && year > 0 &&
            !Number.isNaN(vei) && vei > 5;
    })
}




const filePath = './volcano-events.csv';


try {
    const volcanosCsv = await fs.readFile("src/kappale03/data/h4/volcanos.csv", "utf-8");

    volcano_event_data = csvToObjects(volcanosCsv)

    filtered_data = recent_and_big_eruptions(volcano_event_data)

    console.log(filtered_data)
  
} catch (error) {
    console.error('Error:', error.message);
}
