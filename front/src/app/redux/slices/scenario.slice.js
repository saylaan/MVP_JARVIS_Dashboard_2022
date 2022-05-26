/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ScenarioService from '../../adapters/api-client/scenario/scenario.service';

export const scenariosAdapter = createEntityAdapter();
const initialState = scenariosAdapter.getInitialState();

export const scenarioSlice = createSlice({
    name: 'scenarios',
    initialState,
    reducers: {
        clearScenario: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScenario.fulfilled, (state, action) => {
            console.log('Action scenario/fetchAll : ', action.payload);
            scenariosAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateScenario.fulfilled, (state, { payload }) => {
            console.log('Action scenario/update : ', payload);
            const { id, ...changes } = payload;
            scenariosAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postScenario.fulfilled, (state, action) => {
            console.log('Action scenario/post : ', action.payload);
            scenariosAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteScenario.fulfilled, (state, action) => {
            console.log('Action scenario/delete : ', action.payload);
            scenariosAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearScenario } = scenarioSlice.actions;
export const scenarioReducer = scenarioSlice.reducer;
export const {
    selectById: selectScenarioById,
    selectIds: selectScenarioIds,
    selectEntities: selectScenarioEntities,
    selectAll: selectAllScenarios,
    selectTotal: selectTotalScenarios
} = scenariosAdapter.getSelectors((state) => state.scenario);

export const fetchClusters = createAsyncThunk('/group-actions', async (logs) => {
    try {
        let response = await ScenarioService.getCluster(logs);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const fetchScenario = createAsyncThunk('scenario/fetchAll', async () => {
    try {
        let response = await ScenarioService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateScenario = createAsyncThunk('scenario/update', async (scenario) => {
    try {
        await ScenarioService.put(scenario); // RoomId + IotId
        return scenario;
    } catch (error) {
        console.log(error);
    }
});
export const postScenario = createAsyncThunk('scenario/post', async (scenario) => {
    try {
        let response = await ScenarioService.post(scenario);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteScenario = createAsyncThunk('scenario/delete', async (scenarioId) => {
    try {
        await ScenarioService.deleteItem(scenarioId);
        return scenarioId;
    } catch (error) {
        console.log(error);
    }
});
