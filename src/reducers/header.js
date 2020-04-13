import {createSlice} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'




export const header = createSlice({
    name: 'header',
    initialState: {
        searchedItems: [],
        selectedItems: [],
        allTags: []
        
    },
    reducers: {
        addSearchedItem: (state, action) => {
            console.log(action.payload)
            const existingProduct = state.searchedItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {
                console.log("fanns redan")
//nothing should happen or error message
            }else {
                console.log( action.payload)
                state.searchedItems.push(action.payload)
                console.log(state.selectedItems)
            } 
        },
        addItem: (state, action) => {
            console.log("inside AddItem" + action.payload)
            const existingProduct = state.selectedItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {
//nothing should happen or error message
            }else {
                console.log("addItem before push" + action.payload)
                state.selectedItems.push(action.payload)
                console.log(state.selectedItems)
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
            console.log(action.payload)
            state.allTags.push(action.payload)  
        }
        
    }
}) 



export const searchItem = (searchString) => {
    console.log("inside searchItem")
    return dispatch => {
        fetch(`http://localhost:8000/${searchString}`)
        .then (res => res.json())
        .then (json => { 
           // console.log(json)
           json.map((item) => (
            dispatch(header.actions.addSearchedItem(item))
           ))
            return json;
        } )
    } }

export const searchTags = () => {
    console.log("inside searchTags")
    return dispatch => {
        fetch(`http://localhost:8000/tags`)
        .then (res => res.json())
        .then (json => { 
            console.log(json)
            json.map((item) => (
             dispatch(header.actions.tags(item))
            ))
            console.log(json)
             return json;
            
        })
        }}
   