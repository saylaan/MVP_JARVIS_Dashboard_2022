/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ScenarioTriggernService from '../../adapters/api-client/scenario/scenariotrigger.service';

export const scenariotriggersAdapter = createEntityAdapter();
const initialState = scenariotriggersAdapter.getInitialState();

export const scenariotriggerSlice = createSlice({
    name: 'scenariotriggers',
    initialState,
    reducers: {
        clearScenarioTrigger: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScenarioTrigger.fulfilled, (state, action) => {
            console.log('Action scenariotrigger/fetchAll : ', action.payload);
            scenariotriggersAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateScenarioTrigger.fulfilled, (state, { payload }) => {
            console.log('Action scenariotrigger/update : ', payload);
            const { id, ...changes } = payload;
            scenariotriggersAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postScenarioTrigger.fulfilled, (state, action) => {
            console.log('Action scenariotrigger/post : ', action.payload);
            scenariotriggersAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteScenarioTrigger.fulfilled, (state, action) => {
            console.log('Action scenariotrigger/delete : ', action.payload);
            scenariotriggersAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearScenarioTrigger } = scenariotriggerSlice.actions;
export const scenariotriggerReducer = scenariotriggerSlice.reducer;
export const {
    selectById: selectScenarioTriggerById,
    selectIds: selectScenarioTriggerIds,
    selectEntities: selectScenarioTriggerEntities,
    selectAll: selectAllScenarioTriggers,
    selectTotal: selectTotalScenarioTriggers
} = scenariotriggersAdapter.getSelectors((state) => state.scenariotrigger);

export const fetchScenarioTrigger = createAsyncThunk('scenariotrigger/fetchAll', async () => {
    try {
        let response = await ScenarioTriggernService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateScenarioTrigger = createAsyncThunk('scenariotrigger/update', async (scenariotrigger) => {
    try {
        await ScenarioTriggernService.put(scenariotrigger); // RoomId + IotId
        return scenariotrigger;
    } catch (error) {
        console.log(error);
    }
});
export const postScenarioTrigger = createAsyncThunk('scenariotrigger/post', async (scenariotrigger) => {
    try {
        let response = await ScenarioTriggernService.post(scenariotrigger);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteScenarioTrigger = createAsyncThunk('scenariotrigger/delete', async (scenariotriggerId) => {
    try {
        await ScenarioTriggernService.deleteItem(scenariotriggerId);
        return scenariotriggerId;
    } catch (error) {
        console.log(error);
    }
});
