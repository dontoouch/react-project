
import {useState} from 'react'
import { MdRepeat, MdRepeatOne } from "react-icons/md";

function RepeatButton() {
  const [state, setState] = useState(0)

const buttons = [<MdRepeat color="grey" size="5em" />, <MdRepeat color="#3667f7" size="5em"/>, <MdRepeatOne color="#3667f7" size="5em"/>]

const changeButton = () => {
  state >= 2 ? setState(0) : setState(state + 1)
}
  return (
    <div onClick={changeButton}>
       {buttons[state]}
    </div> 
  );
}
export default RepeatButton;
