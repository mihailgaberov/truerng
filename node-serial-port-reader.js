const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')


SerialPort.list().then(data => console.log('Available ports: ', data))

const serialPort = new SerialPort('COM6', { autoOpen: false })

serialPort.open((err) => {
    if (err) {
        return console.log('Error opening port: ', err.message)
    }

    console.log(`Port opended.`)

    console.log('Baud rate before update: ', serialPort.baudRate)
    serialPort.update({ baudRate: 300 })

    console.log('Baud rate after update: ', serialPort.baudRate)
    console.log('Binding object: ', serialPort.binding)
    console.log('Is open: ', serialPort.isOpen)
    console.log('Path: ', serialPort.path)
})


// Read data that is available but keep the stream in "paused mode"
/* serialPort.on('readable', function () {
    console.log('Data:', serialPort.read())
})
 */
// Switches the port into "flowing mode"
serialPort.on('data', function (data) {
    console.log('Data:', data)
})

// Pipe the data into another stream (like a parser or standard out)
const lineStream = serialPort.pipe(new Readline())
lineStream.on('data', console.log)