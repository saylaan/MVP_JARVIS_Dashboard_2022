/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ActionService from '../../adapters/api-client/scenario/action.service';

export const actionsAdapter = createEntityAdapter();
const initialState = actionsAdapter.getInitialState();

export const actionSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        clearAction: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAction.fulfilled, (state, action) => {
            console.log('Action action/fetchAll : ', action.payload);
            actionsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateAction.fulfilled, (state, { payload }) => {
            console.log('Action action/update : ', payload);
            const { id, ...changes } = payload;
            actionsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postAction.fulfilled, (state, action) => {
            console.log('Action action/post : ', action.payload);
            actionsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteAction.fulfilled, (state, action) => {
            console.log('Action action/delete : ', action.payload);
            actionsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearAction } = actionSlice.actions;
export const actionReducer = actionSlice.reducer;
export const {
    selectById: selectActionById,
    selectIds: selectActionIds,
    selectEntities: selectActionEntities,
    selectAll: selectAllActions,
    selectTotal: selectTotalActions
} = actionsAdapter.getSelectors((state) => state.action);

export const fetchAction = createAsyncThunk('action/fetchAll', async () => {
    try {
        let response = await ActionService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateAction = createAsyncThunk('action/update', async (action) => {
    try {
        await ActionService.put(action); // RoomId + IotId
        return action;
    } catch (error) {
        console.log(error);
    }
});
export const postAction = createAsyncThunk('action/post', async (action) => {
    try {
        let response = await ActionService.post(action);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteAction = createAsyncThunk('action/delete', async (actionId) => {
    try {
        await ActionService.deleteItem(actionId);
        return actionId;
    } catch (error) {
        console.log(error);
    }
});
