import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Text text="Regular text" />
    <Text text="Huge header" textSize='30px' />
    <Text text="Danger notification" textColor="red"  />
    <Text text="Underlined text" textSize='20px' textDecoration={true} />
  </React.StrictMode>
);

