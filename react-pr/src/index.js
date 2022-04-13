import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Text text="item" textColor="red" textSize='50' textDecoration={false}/>
    <Text text="item" textColor="green" textSize='30' textDecoration={true}/>
    <Text text="item" textColor="yellow" textSize='20' textDecoration={false}/>
    <Text text="item" textColor="coral" textSize='40' textDecoration={true} />
  </React.StrictMode>
);

