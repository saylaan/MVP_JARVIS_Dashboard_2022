/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ScenarioConditionService from '../../adapters/api-client/scenario/scenariocondition.service';

export const scenarioconditionsAdapter = createEntityAdapter();
const initialState = scenarioconditionsAdapter.getInitialState();

export const scenarioconditionSlice = createSlice({
    name: 'scenarioconditions',
    initialState,
    reducers: {
        clearScenarioCondition: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScenarioCondition.fulfilled, (state, action) => {
            console.log('Action scenariocondition/fetchAll : ', action.payload);
            scenarioconditionsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateScenarioCondition.fulfilled, (state, { payload }) => {
            console.log('Action scenariocondition/update : ', payload);
            const { id, ...changes } = payload;
            scenarioconditionsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postScenarioCondition.fulfilled, (state, action) => {
            console.log('Action scenariocondition/post : ', action.payload);
            scenarioconditionsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteScenarioCondition.fulfilled, (state, action) => {
            console.log('Action scenariocondition/delete : ', action.payload);
            scenarioconditionsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearScenarioCondition } = scenarioconditionSlice.actions;
export const scenarioconditionReducer = scenarioconditionSlice.reducer;
export const {
    selectById: selectScenarioConditionById,
    selectIds: selectScenarioConditionIds,
    selectEntities: selectScenarioConditionEntities,
    selectAll: selectAllScenarioConditions,
    selectTotal: selectTotalScenarioConditions
} = scenarioconditionsAdapter.getSelectors((state) => state.scenariocondition);

export const fetchScenarioCondition = createAsyncThunk('scenariocondition/fetchAll', async () => {
    try {
        let response = await ScenarioConditionService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateScenarioCondition = createAsyncThunk('scenariocondition/update', async (scenariocondition) => {
    try {
        await ScenarioConditionService.put(scenariocondition); // RoomId + IotId
        return scenariocondition;
    } catch (error) {
        console.log(error);
    }
});
export const postScenarioCondition = createAsyncThunk('scenariocondition/post', async (scenariocondition) => {
    try {
        let response = await ScenarioConditionService.post(scenariocondition);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteScenarioCondition = createAsyncThunk('scenariocondition/delete', async (scenarioconditionId) => {
    try {
        await ScenarioConditionService.deleteItem(scenarioconditionId);
        return scenarioconditionId;
    } catch (error) {
        console.log(error);
    }
});
