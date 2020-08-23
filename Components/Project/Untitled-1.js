<C>
        mountOnEnter 
        unmountOnExit 
        in={props.show} 
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: 'modalOpen',
            exit: '',
            exitActive: 'modalClosed'
        }}




import React from 'react'
import  '../component.css'
import '../Skills/skills.css'
import {Route,Link} from 'react-router-dom'
import Modal from './modal'
import Backdrop from './backdrop'
let projectContent={
         names:['Online workers Hiring Management System','Alumni Dashboard'],
         show:0
}
 let openModal=()=>{
    projectContent.show=1
 }
let closeModal=()=>{
    projectContent.show=0 
}
let modalContent={
    subject:["This website helps people to book workers as per their choices of services like household,baby sitting,cooking etc",
             `This website helps college department to access alumni details whenever required. Alumni should fill the details and it wiil be stored
             in the college server`]
    
}
let projects=(props)=>{
   return(
         <div className="divs" >
               {projectContent.names.map((item)=>
                <div>
                <h2 id="article" onClick={ openModal}>{item}</h2>
                {projectContent.show?
                <div>
                <Modal show={projectContent.show} closed={closeModal} scontent={item} />
                 {/*<Backdrop show={projectContent.show}/>*/}
                 </div>
                :null}
                </div>
                ) }
               )
        </div>
   )
}
export default projects