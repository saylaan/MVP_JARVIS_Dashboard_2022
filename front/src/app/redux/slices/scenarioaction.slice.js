/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ScenarioActionService from '../../adapters/api-client/scenario/scenarioaction.service';

export const scenarioactionsAdapter = createEntityAdapter();
const initialState = scenarioactionsAdapter.getInitialState();

export const scenarioactionSlice = createSlice({
    name: 'scenarioactions',
    initialState,
    reducers: {
        clearScenarioAction: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScenarioAction.fulfilled, (state, action) => {
            console.log('Action scenarioaction/fetchAll : ', action.payload);
            scenarioactionsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateScenarioAction.fulfilled, (state, { payload }) => {
            console.log('Action scenarioaction/update : ', payload);
            const { id, ...changes } = payload;
            scenarioactionsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postScenarioAction.fulfilled, (state, action) => {
            console.log('Action scenarioaction/post : ', action.payload);
            scenarioactionsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteScenarioAction.fulfilled, (state, action) => {
            console.log('Action scenarioaction/delete : ', action.payload);
            scenarioactionsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearScenarioAction } = scenarioactionSlice.actions;
export const scenarioactionReducer = scenarioactionSlice.reducer;
export const {
    selectById: selectScenarioActionById,
    selectIds: selectScenarioActionIds,
    selectEntities: selectScenarioActionEntities,
    selectAll: selectAllScenarioActions,
    selectTotal: selectTotalScenarioActions
} = scenarioactionsAdapter.getSelectors((state) => state.scenarioaction);

export const fetchScenarioAction = createAsyncThunk('scenarioaction/fetchAll', async () => {
    try {
        let response = await ScenarioActionService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateScenarioAction = createAsyncThunk('scenarioaction/update', async (scenarioaction) => {
    try {
        await ScenarioActionService.put(scenarioaction); // RoomId + IotId
        return scenarioaction;
    } catch (error) {
        console.log(error);
    }
});
export const postScenarioAction = createAsyncThunk('scenarioaction/post', async (scenarioaction) => {
    try {
        let response = await ScenarioActionService.post(scenarioaction);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteScenarioAction = createAsyncThunk('scenarioaction/delete', async (scenarioactionId) => {
    try {
        await ScenarioActionService.deleteItem(scenarioactionId);
        return scenarioactionId;
    } catch (error) {
        console.log(error);
    }
});
