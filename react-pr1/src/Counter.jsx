
import './Counter.css';

import {useState} from 'react'

function Counter() {
const [ checkbox , setCheckbox] = useState('active');





  return (
    <div className="checkbox">
      <button onClick={()=> {
      if(checkbox === "active"){
        setCheckbox('deactive')
      }
      else {
        setCheckbox('active')
      }
      
    }}>
        {checkbox}
      </button>
    </div>
  );
}

export default Counter;
