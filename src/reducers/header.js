import {createSlice} from '@reduxjs/toolkit';

export const header = createSlice({
    name: 'header',
    initialState: {
        searchedItems: [],
        selectedItems: [],
        allTags: []  
    },
    reducers: {
        addSearchedItem: (state, action) => {
            const existingProduct = state.searchedItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {

            }else {
                state.searchedItems.push(action.payload)
            } 
        },
        addItem: (state, action) => {
            const existingProduct = state.selectedItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {
            }else {
                state.selectedItems.push(action.payload)
            } 
        },
        removeItem: (state, action) => {
            const existingProduct = state.selectedItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {
                state.selectedItems = state.selectedItems.filter((item) => item._id !== action.payload._id)
            }
        },
        reset: (state, action) => {
            state.searchedItems = []
            state.selectedItems = []
            state.allTags = []
        },
        tags: (state, action) => {
            state.allTags.push(action.payload)  
        }  
    }
}) 

export const searchItem = (searchString) => {
    return dispatch => {
        fetch(`http://project-vinden.herokuapp.com/${searchString}`)
        .then (res => res.json())
        .then (json => { 
            json.map((item) => (
                dispatch(header.actions.addSearchedItem(item))
            ))
            return json;
        })
}}

export const searchTags = () => {
    return dispatch => {
        fetch(`http://project-vinden.herokuapp.com/tags`)
        .then (res => res.json())
        .then (json => { 
            json.map((item) => (
                dispatch(header.actions.tags(item))
            ))
            return json;  
        })
}}
   