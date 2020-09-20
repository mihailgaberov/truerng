const fs = require('fs')

fs.readFile('./random.bin', (err, data) => {
    if (err) throw err;
    console.log(data);

    const numbers = JSON.parse(JSON.stringify(data)).data;

    fs.writeFile('random-numbers.txt', numbers, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Stored data > random-numbers.txt');
    });
});