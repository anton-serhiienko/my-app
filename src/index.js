import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 20},
    {id: 2, message: "It's my first project", likesCount: 4},
]

let dialogs = [
    {id:1, name: "Anton"},
    {id:2, name: "Den4ik"},
    {id:3, name: "Vova"},
    {id:4, name: "Alek"}
]

let messages = [
    {id:1, message: "Hi"},
    {id:2, message: "How do you do?"},
    {id:3, message: "Wassap"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
