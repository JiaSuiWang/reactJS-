/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-20 21:57:53
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-20 22:56:56
 * @FilePath: \CycleProduction\src\index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.less';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
