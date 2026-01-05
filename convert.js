
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'db.json');
const outputFile = path.join(__dirname, 'products.jsonl');

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    const products = jsonData.data;

    const jsonlData = products.map(product => JSON.stringify(product)).join('\n');

    fs.writeFile(outputFile, jsonlData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
        return;
      }
      console.log('Successfully converted to JSONL:', outputFile);
    });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
