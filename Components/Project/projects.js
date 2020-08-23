import React,{Component} from 'react'
import './projects.css'
import Modal from './modal'
import Backdrop from './backdrop'
import Transition from 'react-transition-group/Transition'

class Projects extends Component{
    state={
        project:[{
            name:'Online workers Hiring System',
            content:`This website helps people to book workers as per their choices of services like household,baby sitting,cooking etc`
                },
            {
                name:'Alumni Dashboard',
                content:`This website helps college department to access alumni details whenever required. Alumni should fill the details and it wiil be stored
                 in the college server`
            }
        ],
        sContent:null,
        mContent:null,

        show:false
}
 openModal=(sContent,mContent)=>{
   this.setState((prevState)=>{
       let arr=prevState.project.slice();
       return{
          project: arr,
           show:true,
           sContent,
           mContent
       }
   })
}
 closeModal=()=>{
    this.setState((prevState)=>{
        let arr=prevState.project.slice();
        return{
           project:arr,
            show:false,
            sContent:null,
           mContent:null

        }
    })
}
render()
{
   return(
         <div id="projectDiv" >  
           <Transition
         mountOnEnter
         mountOnExit 
         in={this.state.show} timeout={300}>
         {state=>
         <Modal show={this.state.show} closed={this.closeModal} sContent={this.state.sContent} mContent={this.state.mContent} />
         }
          </Transition>
            <Backdrop show={this.state.show}/>        
               {this.state.project.map((item)=>
                   <h1  id="project"onClick={()=>this.openModal(item.name,item.content)} >{item.name}</h1>    
               )}
        </div>
               
   )
}
}
export default Projects