import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 
'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './dataBase/store'
import { getUser } from './utils/users';
const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
store.dispatch(getUser({userId:userId}))
ReactDOM.render(
  <Router>
    <Provider store={store}>    
      <App />
  </Provider>
  </Router>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

