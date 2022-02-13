import React, { useEffect, useState } from 'react';
import RoomService from '../services/API/Room/room.service';
import RoomIoTService from '../services/API/Room/roomiot.service';

export const IoTContext = React.createContext(null);

export const IoTProvider = ({ children }) => {
  const [ rooms, setRooms ] = useState([]);
  const [ init, setInit ] = useState(true);

  const addRoom = room => {
    RoomService.post(room).then(res => {
      console.log(res);
      const tmp = [ ...rooms ];
      tmp.push(room);
      setRooms([ ...tmp ]);
    }).catch(err => console.error(err));
  };

  const deleteRoom = index => {
    const tmp = [ ...rooms ];
    tmp.slice(index, 1);
    setRooms([ ...tmp ]);
  };

  const getRoomObjects = id => {
    return rooms[id].objects;
  };

  useEffect(() => {
    if (rooms.length > 0 && init) {
      const tmp = [ ...rooms ];

      tmp.map(room => {
        RoomIoTService.getRoomIoTs(room.id)
          .then(res => {
            room.objects = [ ...res.data ];
          }).catch(err => {
            console.error(err);
          });
        });
      setRooms([ ...tmp ]);
      setInit(false);
    } else {
      console.log('ROOMS', rooms);
    }
  }, [rooms]);

  useEffect(() => {
    RoomService.index()
      .then(res => {
        setRooms([ ...res.data ]);
      }).catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <IoTContext.Provider value={{ rooms, setRooms, getRoomObjects, addRoom, deleteRoom }}>
      { children }
    </IoTContext.Provider>
  )
}
