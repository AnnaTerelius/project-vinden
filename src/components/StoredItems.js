import React from 'react';
import {useSelector} from 'react-redux'
import {Item} from './Item';
import {HeaderItem} from './HeaderItem';

export const StoredItems = () => {

    const allStoredItems = useSelector((store)=> (store.storedItems))
    const items = useSelector((store)=> (store.header.items))

    return (
        <div className="storedItems">
            {allStoredItems.map((storedItem)=>(
                <Item key={storedItem.id} item={storedItem} />
            ))}
            <ul className="addedItems">
                {items.map((item) => (
                <HeaderItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}