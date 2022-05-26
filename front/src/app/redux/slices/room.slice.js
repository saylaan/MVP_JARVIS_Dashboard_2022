/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import RoomService from '../../adapters/api-client/room/room.service';

export const roomsAdapter = createEntityAdapter();
const initialState = roomsAdapter.getInitialState();

export const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        clearRoom: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoom.fulfilled, (state, action) => {
            console.log('Action room/fetchAll : ', action.payload);
            roomsAdapter.upsertMany(state, action.payload);
        });
        builder.addCase(updateRoom.fulfilled, (state, { payload }) => {
            console.log('Action room/update : ', payload);
            const { id, ...changes } = payload;
            roomsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postRoom.fulfilled, (state, action) => {
            console.log('Action room/post : ', action.payload);
            roomsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteRoom.fulfilled, (state, action) => {
            console.log('Action room/delete : ', action.payload);
            roomsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearRoom } = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
export const {
    selectById: selectRoomById,
    selectIds: selectRoomIds,
    selectEntities: selectRoomEntities,
    selectAll: selectAllRooms,
    selectTotal: selectTotalRooms
} = roomsAdapter.getSelectors((state) => state.room);

export const fetchRoom = createAsyncThunk('room/fetchAll', async () => {
    try {
        let response = await RoomService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateRoom = createAsyncThunk('room/update', async (room) => {
    try {
        await RoomService.put(room);
        return room;
    } catch (error) {
        console.log(error);
    }
});
export const postRoom = createAsyncThunk('room/post', async (room) => {
    try {
        let response = await RoomService.post({ name: room });
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteRoom = createAsyncThunk('room/delete', async (roomId) => {
    try {
        await RoomService.deleteItem(roomId);
        return roomId;
    } catch (error) {
        console.log(error);
    }
});
// Get Iot from Room
//     RoomService.index()
//       .then(res => {
//         res.data.length > 0  && res.data.map(room => {
//           RoomIotService.getRoomIoTs(room.id)
//             .then(res => {
//               room.objects = [ ...res.data ];
//             }).catch(err =>
//               console.error(err)
//             );
//             setRooms([ ...res.data ]);
//         })
//       }).catch(err => {
//         console.error(err);
//       });
//   };
