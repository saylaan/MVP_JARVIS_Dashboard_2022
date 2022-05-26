/* ------------- || Third Party Imports || ------------- */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
/* ------------- || API Client Imports || ------------- */
// import { apiClient } from '../adapters/api-client';
import IDatavalueIotService from '../../adapters/api-client/iot/idatavalueiot.service';

export const logsAdapter = createEntityAdapter();
const initialState = logsAdapter.getInitialState();

export const logSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        clearLog: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLog.fulfilled, (state, action) => {
            console.log('Action log/fetchAll : ', action.payload);
            logsAdapter.upsertMany(state, action.payload);
        });
        builder.addCase(updateLog.fulfilled, (state, { payload }) => {
            console.log('Action log/update : ', payload);
            const { id, ...changes } = payload;
            logsAdapter.updateOne(state, { id, changes });
        });
        builder.addCase(postLog.fulfilled, (state, action) => {
            console.log('Action log/post : ', action.payload);
            logsAdapter.addOne(state, action.payload);
        });
        builder.addCase(deleteLog.fulfilled, (state, action) => {
            console.log('Action log/delete : ', action.payload);
            logsAdapter.removeOne(state, action.payload);
        });
    }
});
export const { clearLog } = logSlice.actions;
export const logReducer = logSlice.reducer;
export const {
    selectById: selectLogById,
    selectIds: selectLogIds,
    selectEntities: selectLogEntities,
    selectAll: selectAllLogs,
    selectTotal: selectTotalLogs
} = logsAdapter.getSelectors((state) => state.log);

export const fetchLog = createAsyncThunk('log/fetchAll', async () => {
    try {
        let response = await IDatavalueIotService.index();
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const updateLog = createAsyncThunk('log/update', async (log) => {
    try {
        await IDatavalueIotService.put(log);
        return log;
    } catch (error) {
        console.log(error);
    }
});
export const postLog = createAsyncThunk('log/post', async (log) => {
    try {
        let response = await IDatavalueIotService.post({ name: log });
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
export const deleteLog = createAsyncThunk('log/delete', async (logId) => {
    try {
        await IDatavalueIotService.deleteItem(logId);
        return logId;
    } catch (error) {
        console.log(error);
    }
});
