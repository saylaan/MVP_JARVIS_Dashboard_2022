/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import RoomIotService from '../../adapters/api-client/room/roomiot.service';

export const roomiotsAdapter = createEntityAdapter();
const initialState = roomiotsAdapter.getInitialState();

export const roomiotSlice = createSlice({
    name: 'roomiots',
    initialState,
    reducers: {
        clearRoomIot: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRoomIot.fulfilled, (state, action) => {
            console.log('Action roomiot/fetchAll : ', action.payload);
            roomiotsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateRoomIot.fulfilled, (state, { payload }) => {
            console.log('Action roomiot/update : ', payload);
            const { id, ...changes } = payload;
            roomiotsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postRoomIot.fulfilled, (state, action) => {
            console.log('Action roomiot/post : ', action.payload);
            roomiotsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteRoomIot.fulfilled, (state, action) => {
            console.log('Action roomiot/delete : ', action.payload);
            roomiotsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearRoomIot } = roomiotSlice.actions;
export const roomIotReducer = roomiotSlice.reducer;
export const {
    selectById: selectRoomIotById,
    selectIds: selectRoomIotIds,
    selectEntities: selectRoomIotEntities,
    selectAll: selectAllRoomIots,
    selectTotal: selectTotalRoomIots
} = roomiotsAdapter.getSelectors((state) => state.roomiot);

export const fetchRoomIot = createAsyncThunk('roomiot/fetchAll', async () => {
    try {
        let response = await RoomIotService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateRoomIot = createAsyncThunk('roomiot/update', async (roomiot) => {
    try {
        await RoomIotService.put(roomiot); // RoomId + IotId
        return roomiot;
    } catch (error) {
        console.log(error);
    }
});
export const postRoomIot = createAsyncThunk('roomiot/post', async (roomiot) => {
    try {
        let response = await RoomIotService.post(roomiot);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteRoomIot = createAsyncThunk('roomiot/delete', async (roomiotId) => {
    try {
        await RoomIotService.deleteItem(roomiotId);
        return roomiotId;
    } catch (error) {
        console.log(error);
    }
});
