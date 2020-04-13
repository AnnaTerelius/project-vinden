import React from 'react';
import { Header } from './components/Header';
import { Items } from './components/Items';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import logo from './logo.svg';
import './App.css';
import {header} from './reducers/header';
//import {items} from './reducers/items';


//reducer byt namn från quis till det som ska anvöndas i denna app
const reducer = combineReducers({
  header: header.reducer,
  //items: items.reducer
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


//export default App;
