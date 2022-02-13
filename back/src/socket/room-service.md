let sensors = []
let devices = []
let rooms = []

const connectIoT = (iot) => {
    if (iot.type === 'device') {
        devices.push(iot)
    } else {
        sensors.push(iot)
    }
    return (iot)
}
const disconnectIot = (iot) => {
    let index;
    if (iot.type === 'device') {
        index = devices.findIndex((device) => device.id === id);
        if (index !== -1) {
          return devices.splice(index, 1)[0];
        }    
    } else {
        index = sensors.findIndex((senspr) => sensor.id === id);
        if (index !== -1) {
          return sensors.splice(index, 1)[0];
        } 
    }
    // for (let i = 0; i < this.devices.length; i++) {
    //     if ((this.devices[i].id = device.id)) {
    //         this.devices.splice(i, 1);
    //     }
    // }
    // return;
}
const getIoT = (id) => {
    if (iot.type === 'device') {
        return devices.find((device) => device.id === id);
    } else {
        return sensors.find((sensor) => sensor.id === id);
    }
  }
// const createRoom = (room) => {
//     rooms.push(room)
// }
// const addToRoom = (iot) => {
//     return
// }

modules.exports = {
    connectIoT,
    disconnectIot,
    getIoT
    // addToRoom
}
// class Room {
//     constructor(room, iot) {

//     }
// }

// SOCKET IMPLEMENTATION
// socket.on('join-room', async data => { // add this from event trigger by front for adding to room
//     try {
//         socket.join(newRoom.name)
//     } catch (err) {
//         console.log(err)
//     }
// })