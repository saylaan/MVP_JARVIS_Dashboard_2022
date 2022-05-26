/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import IotService from '../../adapters/api-client/iot/iot.service';

export const iotsAdapter = createEntityAdapter();
const initialState = iotsAdapter.getInitialState();

export const iotSlice = createSlice({
    name: 'iots',
    initialState,
    reducers: {
        clearIot: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIot.fulfilled, (state, action) => {
            console.log('Action iot/fetchAll : ', action.payload);
            iotsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateIot.fulfilled, (state, { payload }) => {
            console.log('Action iot/update : ', payload);
            const { id, ...changes } = payload;
            iotsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postIot.fulfilled, (state, { payload }) => {
            console.log('Action iot/post : ', payload);
            // const { id, ...changes } = payload;
            iotsAdapter.addOne(payload); // setOne / upsertOne
        });
        builder.addCase(deleteIot.fulfilled, (state, { payload }) => {
            console.log('Action iot/delete : ', payload);
            iotsAdapter.removeOne(payload); // id item
        });
        // upsertOne and upsertMany will do a shallow copy to merge the old and new entities overwriting existing values
        // setOne and setMany will completely replace the old entity with the new one.
        // addOne and addMany will do nothing with the new entity
    }
});
export const { clearIot } = iotSlice.actions;
export const iotReducer = iotSlice.reducer;
export const {
    selectById: selectIotById, // given the state and an entity ID, returns the entity with that ID or undefined.
    selectIds: selectIotIds, // returns the state.ids array.
    selectEntities: selectIotEntities, // returns the state.entities lookup table
    selectAll: selectAllIots, // maps over the state.ids array, and returns an array of entities in the same order
    selectTotal: selectTotalIots // returns the total number of entities being stored in this state
} = iotsAdapter.getSelectors((state) => state.iot);

export const fetchIot = createAsyncThunk('iot/fetchAll', async () => {
    // fetch all data from the slice
    try {
        let response = await IotService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateIot = createAsyncThunk('iot/update', async (iot) => {
    // send object data with update
    try {
        await IotService.put(iot);
        // Object that we need to send
        // {id: user.id, changes: { name: newName }
        return iot;
    } catch (error) {
        console.log(error);
    }
});
export const postIot = createAsyncThunk('iot/post', async (iot) => {
    // send data and transform as object {}
    try {
        let response = await IotService.post({ name: iot });
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteIot = createAsyncThunk('iot/delete', async (iotId) => {
    // send iotId
    try {
        await IotService.deleteItem(iotId);
        return iotId;
    } catch (error) {
        console.log(error);
    }
});
