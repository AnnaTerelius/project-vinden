import {createSlice} from '@reduxjs/toolkit';

export const header = createSlice({
    name: 'header',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)
            if (existingProduct) {
//nothing should happen or error message
            }else {
                state.items.push(action.payload)
            } 
        },
        removeItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)
            if (existingProduct) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            }
        }
    }
})