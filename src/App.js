import React from 'react';
import { Header } from './components/Header';
import { StoredItems } from './components/StoredItems';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import logo from './logo.svg';
import './App.css';
import {header} from './reducers/header';
import {storedItems} from './reducers/storedItems';

//reducer byt namn från quis till det som ska anvöndas i denna app
const reducer = combineReducers({
  header: header.reducer,
  storedItems: storedItems.reducer
})

const store = configureStore({ reducer })

export const App = () => (
    
      <Provider store={store}>
        <div className="Main">
          <Header />
          <StoredItems />
        </div>
      </Provider>
    
  );


//export default App;
