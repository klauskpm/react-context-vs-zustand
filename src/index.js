import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './examples/NormalContext/Shared'
// import App from './examples/NormalContext/Individual'
// import App from './examples/SimplerContext/Shared'
// import App from './examples/SimplerContext/Individual'
// import App from './examples/SimplerContextWithExtras/Shared'
// import App from './examples/SimplerContextWithExtras/Individual'
// import App from './examples/Zustand'
// import App from './examples/ZustandWithContext'
// import App from './examples/ZustandWithExtras'
// import App from './examples/ZustandWithExtrasAndContext'
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
