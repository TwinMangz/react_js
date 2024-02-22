import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navfolder/nav-bar';
import BodySection from './bodypartfolder/body-section'
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const page = ReactDOM.createRoot(document.getElementById("root2"));

page.render(
  <div>
    <Navbar />
    <BodySection />
  </div>
  );

  
  // <h1>Naruto Rasengan</h1>
  // <React.StrictMode>
  // <App/>
  // </React.StrictMode>
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
