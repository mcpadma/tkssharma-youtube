import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class based component rendering code starts here
// class Hello extends React.Component {
//   render() {
//     return(
//       <h1> Welcome to React</h1>
//     )
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ends here
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
