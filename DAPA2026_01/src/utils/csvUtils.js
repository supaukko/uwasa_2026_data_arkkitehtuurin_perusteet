export const escapeCSV = (value, delimiter) => {
  const str = String(value);

  if (str.includes(delimiter) || str.includes('"') || str.includes('\n')) {
    return `"${str.replaceAll('"', '""')}"`;
  }

  return str;
};

export const objectsToCSV = (objects, delimiter = ",", includeHeader = false) => {

  const header = includeHeader ? Object.keys(objects[0]).join(delimiter) : [];

  const rows = objects.map(obj =>
    Object.values(obj)
      .map(value => escapeCSV(value, delimiter))
      .join(delimiter)
  );

  return [header, ...rows].join("\n");
};

export const csvToObjects = (csv, delimiter = ';') => {
    try {
        const rows = csv.split(/\r?\n/)
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