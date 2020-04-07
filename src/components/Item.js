import React from 'react';
import {useDispatch} from 'react-redux';
import {header} from '../reducers/header'

export const Item = ({item}) => {
    const dispatch = useDispatch()
    return (
        <div className="itemContainer">
             {item.title}
            <button className="item-btn"
                type='button'
                onClick={()=> dispatch(header.actions.addItem(item))}>
                Add
            </button>
        </div>
    )
}