import {createSlice} from '@reduxjs/toolkit'

const itemData = [
    {id: 1, title: 'candle', tag: 'wedding'},
    {id: 2, title: 'tablecloth', tag: 'wedding'},
    {id: 3, title: 'plate', tag: 'everyday'},
    {id: 4, title: 'glas', tag: 'childrensparty'},
    {id: 5, title: 'cuttlery', tag: 'everyday'}
]

export const storedItems = createSlice({
    name: 'storedItems',
    initialState: itemData
})