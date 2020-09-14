const fs = require('fs')

fs.readFile('./random.bin', (err, data) => {
  if (err) throw err;
  console.log(data);

    let json = JSON.stringify(data);
    console.log(json);
});