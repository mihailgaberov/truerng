const fs = require('fs')

fs.readFile('./random.bin', (err, data) => {
  if (err) throw err;
  console.log(data);

    let json = JSON.stringify(data);
    console.log(json);

  fs.writeFile('random-numbers.txt', json, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('JSON data > random-numbers.txt');
  });
});