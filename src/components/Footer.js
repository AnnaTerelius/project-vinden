import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import {header} from '../reducers/header'
import {searchTags} from '../reducers/header'
import {searchItem} from '../reducers/header'

export const Footer = () => {
    const allTags = useSelector((store)=> (store.header.allTags))
    const dispatch = useDispatch()

    return (
        <div className="footer">
            {allTags.map((item) => (
                 <div onClick={()=> dispatch(searchItem(item))} >{item}</div>
                ))}
            <div className="container">
                <div className="btn-container">
                    <button className="item-btn" type="button" onClick={()=> dispatch(searchTags())}>Tags</button>
                    <button className="item-btn" type='button' onClick={()=> {dispatch(header.actions.reset()); window.location.reload();}}>Reset</button>
                </div>
            </div>
        </div>
    )
}