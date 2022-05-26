/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ICategoryIotService from '../../adapters/api-client/iot/icategoryiot.service';

export const icategoryiotsAdapter = createEntityAdapter();
const initialState = icategoryiotsAdapter.getInitialState();

export const icategoryiotSlice = createSlice({
    name: 'icategoryiots',
    initialState,
    reducers: {
        clearICategoryIot: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchICategoryIot.fulfilled, (state, action) => {
            console.log('Action icategoryiot/fetchAll : ', action.payload);
            icategoryiotsAdapter.upsertMany(state, action.payload);
        });
        builder.addCase(updateICategoryIot.fulfilled, (state, { payload }) => {
            console.log('Action icategoryiot/update : ', payload);
            const { id, ...changes } = payload;
            icategoryiotsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postICategoryIot.fulfilled, (state, action) => {
            console.log('Action icategoryiot/post : ', action.payload);
            icategoryiotsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteICategoryIot.fulfilled, (state, action) => {
            console.log('Action icategoryiot/delete : ', action.payload);
            icategoryiotsAdapter.removeOne(state, action.payload);
        });
    }
});
export const { clearICategoryIot } = icategoryiotSlice.actions;
export const icategoryIotReducer = icategoryiotSlice.reducer;
export const {
    selectById: selectICategoryIotById,
    selectIds: selectICategoryIotIds,
    selectEntities: selectICategoryIotEntities,
    selectAll: selectAllICategoryIots,
    selectTotal: selectTotalICategoryIots
} = icategoryiotsAdapter.getSelectors((state) => state.icategoryiot);

export const fetchICategoryIot = createAsyncThunk('icategoryiot/fetchAll', async () => {
    try {
        let response = await ICategoryIotService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateICategoryIot = createAsyncThunk(
    'icategoryiot/update',
    async (icategoryiot) => {
        try {
            await ICategoryIotService.put(icategoryiot);
            return icategoryiot;
        } catch (error) {
            console.log(error);
        }
    }
);
export const postICategoryIot = createAsyncThunk(
    'icategoryiot/post',
    async (icategoryiot) => {
        try {
            let response = await ICategoryIotService.post({ name: icategoryiot });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);
export const deleteICategoryIot = createAsyncThunk(
    'icategoryiot/delete',
    async (icategoryiotId) => {
        try {
            await ICategoryIotService.deleteItem(icategoryiotId);
            return icategoryiotId;
        } catch (error) {
            console.log(error);
        }
    }
);
