import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/ContextAPI/StateProvider';
import reducer, {initialState} from "./components/ContextAPI/reducer" 
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
 
const options = {
  timeout: 2000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render( 
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Provider template={AlertTemplate} {...options}>
         <App /> 
    </Provider> 
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
 