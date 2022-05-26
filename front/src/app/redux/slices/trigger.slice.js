/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import TriggerService from '../../adapters/api-client/scenario/trigger.service';

export const triggersAdapter = createEntityAdapter();
const initialState = triggersAdapter.getInitialState();

export const triggerSlice = createSlice({
    name: 'triggers',
    initialState,
    reducers: {
        clearTrigger: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrigger.fulfilled, (state, action) => {
            console.log('Action trigger/fetchAll : ', action.payload);
            triggersAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateTrigger.fulfilled, (state, { payload }) => {
            console.log('Action trigger/update : ', payload);
            const { id, ...changes } = payload;
            triggersAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postTrigger.fulfilled, (state, action) => {
            console.log('Action trigger/post : ', action.payload);
            triggersAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteTrigger.fulfilled, (state, action) => {
            console.log('Action trigger/delete : ', action.payload);
            triggersAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearTrigger } = triggerSlice.actions;
export const triggerReducer = triggerSlice.reducer;
export const {
    selectById: selectTriggerById,
    selectIds: selectTriggerIds,
    selectEntities: selectTriggerEntities,
    selectAll: selectAllTriggers,
    selectTotal: selectTotalTriggers
} = triggersAdapter.getSelectors((state) => state.trigger);

export const fetchTrigger = createAsyncThunk('trigger/fetchAll', async () => {
    try {
        let response = await TriggerService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateTrigger = createAsyncThunk('trigger/update', async (trigger) => {
    try {
        await TriggerService.put(trigger); // RoomId + IotId
        return trigger;
    } catch (error) {
        console.log(error);
    }
});
export const postTrigger = createAsyncThunk('trigger/post', async (trigger) => {
    try {
        let response = await TriggerService.post(trigger);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteTrigger = createAsyncThunk('trigger/delete', async (triggerId) => {
    try {
        await TriggerService.deleteItem(triggerId);
        return triggerId;
    } catch (error) {
        console.log(error);
    }
});
