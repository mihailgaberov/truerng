/* const fs = require('fs')

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
}); */

async function getData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin'
    });
    return response;
}

getData('./generate_numbers_with_truerng.py')
    .then(data => {
        console.log('>>>', JSON.stringify(data));
    });