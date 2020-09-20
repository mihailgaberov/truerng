const fs = require('fs')

fs.readFile('./random.bin', (err, data) => {
    if (err) throw err;

    const allNumbersInRange75 = Array
        .from(JSON.parse(JSON.stringify(data)).data)
        .filter(num => num <= 75 && num > 0);
    const only75UniqueNumbers = new Set(allNumbersInRange75);

    fs.writeFile('random-numbers.txt', Array.from(only75UniqueNumbers), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Stored data > random-numbers.txt');
    });
});