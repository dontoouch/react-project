
import './Text.css';

function Text({text,textColor,textSize , textDecoration}  ) {
 let line = '';
if(textDecoration===true) {
  line = "underline";

}
else {
  line = "none";
}
const styles = {
  fontSize: textSize ,
  color: textColor,
  textDecoration: line,
};
  return (
    <div className='Text' style = {	styles }  > 
      {text}
    </div>
  );
}

export default Text; 
