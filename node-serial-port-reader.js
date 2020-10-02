const SerialPort = require('serialport')

SerialPort.list().then(data => console.log('Available ports: ', data))

const serialPort = new SerialPort('COM6', { autoOpen: false })

serialPort.open(() => {
    console.log(`Port opended.`)


    console.log('Baud rate: ', serialPort.baudRate)
    serialPort.update({ baudRate: 300 })
    console.log('Baud rate: ', serialPort.baudRate)
})
