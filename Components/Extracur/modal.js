import React from 'react'
import CSSTransition from "react-transition-group/CSSTransition";
import '../Project/modal.css'

const animationTiming = {
    enter: 400,
    exit: 1000
};

let modal=(props)=>{
    const modalclass = [ 'modal',props.show ? 'modalOpen' : 'modalClosed'];
return(
    <div className={modalclass.join(' ')}>
     <h2>{props.sContent}</h2>
     <p>{props.mContent}</p>
    <button onClick={props.closed}>close</button>
    </div>)
   
}
export default modal