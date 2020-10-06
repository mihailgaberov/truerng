const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

let path = '';
SerialPort.list().then(data => {
    // Get the path of the port on which TrueRNG is attached
    data.forEach(port => {
        if (port && port.manufacturer && port.manufacturer.includes('ubld.it')) {
            path = port.path;
            console.log('Port path found: ', path);
        } else {
            return console.log('Cannot find TrueRNG in the available ports.');
        }
    });

    const serialPort = new SerialPort(path, { autoOpen: false });

    serialPort.open((err) => {
        if (err) {
            return console.log('Error opening port: ', err.message);
        }

        console.log(`Port opended.`);

        console.log('Baud rate before update: ', serialPort.baudRate);
        serialPort.update({ baudRate: 300 });
        console.log('Baud rate after update: ', serialPort.baudRate);
    })


    // Read data that is available but keep the stream in "paused mode"
    serialPort.on('readable', function () {
        serialPort.read(512);
    })

    let arrNumbers = [];

// Switches the port into "flowing mode"
serialPort.on('data', function (receivedData) {
    if (arrNumbers.length === 0) {
        // console.log('================== Data:', JSON.stringify(receivedData))
        arrNumbers = JSON.parse(JSON.stringify(receivedData)).data;
        console.log('>>>> nums: ', arrNumbers);
    }
})
});