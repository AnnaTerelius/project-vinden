//import React from 'react';
import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import {SelectedItem} from './SelectedItem';
import {SearchedItem} from './SearchedItem';
import {header} from '../reducers/header'
import {searchItem} from '../reducers/header'
import {searchTags} from '../reducers/header'

export const Items = ({item}) => {

    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState('')

    const searchedItems = useSelector((store)=> (store.header.searchedItems))
    const selectedItems = useSelector((store)=> (store.header.selectedItems))
    const allTags = useSelector((store)=> (store.header.allTags))
    const dispatch = useDispatch()

    return (
        <div className="storedItems">
            <ul className="addedItems">
                {searchedItems.map((item) => (
                <SearchedItem key={item.id} item={item} />
                ))}
            </ul>
            <form className="background">
                <article className="inputField">
                    <input type="text" value={message} required className="searchField" onChange={(event) => { setMessage(event.target.value)}}></input>
                    <button className="added-btn" type="button" onClick={()=> dispatch(searchItem(message))}>Search</button>
                </article>
            </form>
            {selectedItems.map((item)=>(
                <SelectedItem key={item.id} item={item} />
            ))}
             <div className="submit-btn-container">
                <button className="submit-btn" type="button" onClick={() => { dispatch(header.actions.reset()); setSubmit('Thanks for using Vinden, we will deliver your items within 2 hours!'); setMessage('')}}>Submit</button>
                <p className="submit-text">{submit}</p>
            </div> 
        </div>
    )
}