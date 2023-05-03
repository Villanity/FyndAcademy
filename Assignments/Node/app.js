const fs = require('fs');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
  console.log('File has been copied successfully!');
});

readStream.on('error', (err) => {
  console.log(`Error while reading file: ${err.message}`);
});

writeStream.on('error', (err) => {
  console.log(`Error while writing file: ${err.message}`);
});