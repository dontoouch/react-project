import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Text text="item" textColor="red" textSize='50px' textDecoration={false}/>
    <Text text="item" textColor="green" textSize='30px' textDecoration={true}/>
    <Text text="item" textColor="yellow" textSize='20px' textDecoration={false}/>
    <Text text="item" textColor="coral" textSize='40px' textDecoration={true} />
  </React.StrictMode>
);

