
import './Counter.css';

import {useState} from 'react'

function Counter() {
const [ checkbox , setCheckbox] = useState('active');





  return (
    <div className="checkbox" onClick={()=> {
      if(checkbox === "active"){
        setCheckbox('deactiv')
      }
      else {
        setCheckbox('activ')
      }
      
    }}>
      <button>
        
      </button>
    </div>
  );
}

export default Counter;
