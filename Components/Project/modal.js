import React from 'react'
import CSSTransition from "react-transition-group/CSSTransition";
import './modal.css'

const animationTiming = {
    enter: 400,
    exit: 1000
};

let modal=(props)=>{
    const modalclass = ['modal', props.show ? 'modalOpen' : 'modalClosed'];
return(
    <div className={modalclass.join(' ')}>
     <h2>{props.sContent}</h2>
     <p>{props.mContent}</p>
    {/* <h4>Technolgy used:HTML,CSS,Javascript,JQuery,Bootstrap,Php</h4>
     <h4>Database used:MySQL</h4>
     <h4>Tools used:Visula Studio Code,XAMPP</h4>*/}
    <button onClick={props.closed}>close</button>
    </div>)
   
}
export default modal