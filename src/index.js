import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './NormalContext/Shared'
// import App from './NormalContext/Individual'
// import App from './SimplerContext/Shared'
import App from './SimplerContext/Individual'
// import App from './SimplerContextWithExtras'
// import App from './Zustand'
// import App from './ZustandWithExtras'
// import App from './ZustandWithExtrasAndContext'
import reportWebVitals from './reportWebVitals';
import {Tracker} from "./Performance/Tracker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Tracker/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
