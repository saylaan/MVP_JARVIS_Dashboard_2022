/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ConditionService from '../../adapters/api-client/scenario/condition.service';

export const conditionsAdapter = createEntityAdapter();
const initialState = conditionsAdapter.getInitialState();

export const conditionSlice = createSlice({
    name: 'conditions',
    initialState,
    reducers: {
        clearCondition: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCondition.fulfilled, (state, action) => {
            console.log('Action condition/fetchAll : ', action.payload);
            conditionsAdapter.upsertMany(state, action.payload); // setAll / addMany / setMany / upsertMany
        });
        builder.addCase(updateCondition.fulfilled, (state, { payload }) => {
            console.log('Action condition/update : ', payload);
            const { id, ...changes } = payload;
            conditionsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postCondition.fulfilled, (state, action) => {
            console.log('Action condition/post : ', action.payload);
            conditionsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteCondition.fulfilled, (state, action) => {
            console.log('Action condition/delete : ', action.payload);
            conditionsAdapter.removeOne(state, action.payload);
        });
    }
});

export const { clearCondition } = conditionSlice.actions;
export const conditionReducer = conditionSlice.reducer;
export const {
    selectById: selectConditionById,
    selectIds: selectConditionIds,
    selectEntities: selectConditionEntities,
    selectAll: selectAllConditions,
    selectTotal: selectTotalConditions
} = conditionsAdapter.getSelectors((state) => state.condition);

export const fetchCondition = createAsyncThunk('condition/fetchAll', async () => {
    try {
        let response = await ConditionService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateCondition = createAsyncThunk('condition/update', async (condition) => {
    try {
        await ConditionService.put(condition); // RoomId + IotId
        return condition;
    } catch (error) {
        console.log(error);
    }
});
export const postCondition = createAsyncThunk('condition/post', async (condition) => {
    try {
        let response = await ConditionService.post(condition);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteCondition = createAsyncThunk('condition/delete', async (conditionId) => {
    try {
        await ConditionService.deleteItem(conditionId);
        return conditionId;
    } catch (error) {
        console.log(error);
    }
});
