import React from 'react';
import {useDispatch} from 'react-redux';
import {header} from '../reducers/header'

export const SelectedItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div className="itemContainer">
            {item.title}
            <button className="added-btn"
                type='button'
                onClick={()=> dispatch(header.actions.removeItem(item))}>
                Remove
            </button>
        </div>
    )
}