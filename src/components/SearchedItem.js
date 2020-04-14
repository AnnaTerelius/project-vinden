import React from 'react';
import {useDispatch} from 'react-redux';
import {header} from '../reducers/header'

export const SearchedItem = ({item}) => {
    const dispatch = useDispatch()
  
    return (
        <div className="itemContainer">
            {item.title}
            <button className="added-btn" type="button" onClick={() => dispatch(header.actions.addItem(item))}>Add</button>
        </div>
    )
}

