import React from 'react';
import cloud from '../cloud.png';
import {useSelector} from 'react-redux';


export const Header = () => {

    return (
        <div className="header">
            <div >
                <img src={cloud} className="logo" alt="logo" />
            </div>
          
        </div>
    )
}