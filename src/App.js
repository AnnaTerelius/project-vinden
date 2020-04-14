import React from 'react';
import { Header } from './components/Header';
import { Items } from './components/Items';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import './App.css';
import {header} from './reducers/header';

const reducer = combineReducers({
  header: header.reducer,
})

const store = configureStore({ reducer })

export const App = () => (
    
      <Provider store={store}>
        <div className="Main">
          <Header />
          <Items />
          <Footer />
        </div>
      </Provider>
  );



