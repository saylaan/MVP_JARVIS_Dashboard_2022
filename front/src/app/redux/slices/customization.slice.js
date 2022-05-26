/* ------------- || Third Party Imports || ------------- */
import { createSlice } from '@reduxjs/toolkit';
/* ------------- || Config || ------------- */
import config from '../../../config';

const initialStateValue = {
    isAuthenticated: false,
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
};
export const customizationSlice = createSlice({
    name: 'customization',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state) => {
            state.value.isAuthenticated = true;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
        openMenu: (state, action) => {
            let id = action.id;
            // isOpen: ['util-color']
            state.value.isOpen = [id];
        },
        setMenu: (state, action) => {
            state.value.opened = action.payload;
        },
        setFontFamily: (state, action) => {
            state.value.fontFamily = action.payload;
        },
        setBorderRadius: (state, action) => {
            state.value.borderRadius = action.payload;
        }
    }
});

export const { login, logout, openMenu, setMenu, setFontFamily, setBorderRadius } = customizationSlice.actions;
export const customizationReducer = customizationSlice.reducer;
