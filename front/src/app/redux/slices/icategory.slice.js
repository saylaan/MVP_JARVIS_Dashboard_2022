/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ICategoryService from '../../adapters/api-client/iot/icategory.service';

export const icategorysAdapter = createEntityAdapter();
const initialState = icategorysAdapter.getInitialState();

export const icategorySlice = createSlice({
    name: 'icategorys',
    initialState,
    reducers: {
        clearICategory: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchICategory.fulfilled, (state, action) => {
            console.log('Action icategory/fetchAll : ', action.payload);
            icategorysAdapter.upsertMany(state, action.payload);
        });
        builder.addCase(updateICategory.fulfilled, (state, { payload }) => {
            console.log('Action icategory/update : ', payload);
            const { id, ...changes } = payload;
            icategorysAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postICategory.fulfilled, (state, action) => {
            console.log('Action icategory/post : ', action.payload);
            icategorysAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteICategory.fulfilled, (state, action) => {
            console.log('Action icategory/delete : ', action.payload);
            icategorysAdapter.removeOne(state, action.payload);
        });
    }
});
export const { clearICategory } = icategorySlice.actions;
export const icategoryReducer = icategorySlice.reducer;
export const {
    selectById: selectICategoryById,
    selectIds: selectICategoryIds,
    selectEntities: selectICategoryEntities,
    selectAll: selectAllICategorys,
    selectTotal: selectTotalICategorys
} = icategorysAdapter.getSelectors((state) => state.icategory);

export const fetchICategory = createAsyncThunk('icategory/fetchAll', async () => {
    try {
        let response = await ICategoryService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateICategory = createAsyncThunk('icategory/update', async (icategory) => {
    try {
        await ICategoryService.put(icategory);
        return icategory;
    } catch (error) {
        console.log(error);
    }
});
export const postICategory = createAsyncThunk('icategory/post', async (icategory) => {
    try {
        let response = await ICategoryService.post({
            name: icategory
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteICategory = createAsyncThunk(
    'icategory/delete',
    async (icategoryId) => {
        try {
            await ICategoryService.deleteItem(icategoryId);
            return icategoryId;
        } catch (error) {
            console.log(error);
        }
    }
);
