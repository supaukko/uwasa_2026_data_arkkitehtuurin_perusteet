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