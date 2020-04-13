import React from 'react';
import cloud from '../cloud.png';
import {useSelector} from 'react-redux';


export const Header = () => {

    return (
        <div className="header">
            <div className="logo-img">
                <img src={cloud} className="logo" alt="logo" />
            </div>
          
        </div>
    )
}