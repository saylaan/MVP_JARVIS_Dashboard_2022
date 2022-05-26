/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import ModelService from '../../adapters/api-client/model/model.service';

const initialStateValue = {
    cluster: []
};

export const modelSlice = createSlice({
    name: 'model',
    initialState: { value: initialStateValue },
    reducers: {
        clearModel: (state) => {
            state.value = initialStateValue;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postModel.fulfilled, (state, action) => {
            console.log('Action model/post : ', action.payload);
            state.value.cluster = action.payload;
        });
    }
});
export const { clearModel } = modelSlice.actions;
export const modelReducer = modelSlice.reducer;

export const postModel = createAsyncThunk('model/post', async (actions) => {
    try {
        let response = await ModelService.post({ name: actions });
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
