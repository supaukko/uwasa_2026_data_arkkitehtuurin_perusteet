import fs from "node:fs/promises";

const volcanosCsv = await fs.readFile("src/kappale03/data/h3/volcanos.csv", "utf-8");

const parseCSVtoObjects = (csvData, delimiter = ';') => {
    try {
        const rows = csvData.split('\n')
        let jsonData = []
        const headers = rows[0].split(delimiter)
        rows.shift()
        rows.forEach(row => {
            const elements = row.split(delimiter)
            let obj = {}
            headers.forEach((header, idx) => {
                obj[header] = elements[idx]
            })
            // jsonData.push(JSON.stringify(obj))
            jsonData.push(obj)
        })
        return jsonData
    } catch (error) {
        console.error('Error parsing CSV:', error);
        throw error;
    }
}

const parseCSVtoObjects2 = (csvData, delimiter = ';') => {
    try {
        const rows = csvData.split(/\r?\n/)
        const [headerRow, ...dataRows] = rows

        const headers = headerRow.split(delimiter).map(item => item.toLowerCase().trim())
        return dataRows.map(row => {
            const items = row.split(delimiter).map(item => item.trim())
            const obj = {}

            headers.forEach((header, idx) => {
                obj[header] = items[idx] ?? ""
            });
            return obj
            // return JSON.stringify(obj);
        })
    } catch (error) {
        console.error('Error parsing CSV:', error)
        throw error
    }
}

let filtered_volcano_data = []
let volcano_data_a = []


/**
 * Tämä funktio saa parametrikseen listan dataa.
 * Sen pitäisi palauttaa lista, jossa ei ole tulivuoria joiden
 * viimeisimmän purkausvuoden arvo on Unknown
 **/
const remove_volcanos_with_unknown_eruption_year = (data) => {
    return data.filter(item => item.last_eruption_year !== 'Unknown')
}

// Function to print volcano data
function print_volcanoes(data) {
    data.forEach(row => console.log(row));
}


// Main logic
volcano_data_a = parseCSVtoObjects2(volcanosCsv)
filtered_volcano_data = remove_volcanos_with_unknown_eruption_year(volcano_data_a);


