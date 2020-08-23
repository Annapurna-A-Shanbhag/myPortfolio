import React,{Component} from 'react'
import './extracur.css'
import Modal from './modal'
import Backdrop from '../Project/backdrop'
import Transition from 'react-transition-group/Transition'
class extracur extends Component{
    state={
        project:[{
            name:'Technical Coordinator at Girlscript Karnataka Region',
            content:`I am currently working as the Technical Coordinator at Girlscript Karnataka Region. Previously
                     I was working as a member of Girlscript Manglore chapter and we conducted many technical events.`
                },
            {
                name:'Joint Secretary Rotaract Club NMAMIT Nitte',
                content:`I am presently working as the Joint Secretary of Rotaract Club NMAMIT Nitte which is an International Club and conducted many social
                activities in Nitte Region`
            },
            {
                name:'Vishwa Konkani Scholership awardee',
                content:`This is a scholership programme which provides scholership for limited CET top rankers whose mother tongue is Konkani.
                I have successfully attended their five camps `
            },
            {
                name:'Cultural Member VISTA NMAMIT Nitte',
                content:`I am currently working as the Cultural Member of VISTA(Versatile Information Science Technical Aspirants)
                and conducted many events. I have also given dance performances during our fest 'Incridea' `

            },
            {
                name:'Member Taaleem Club NMAMIT Nitte ',
                content:`I am presently working as the member of Taaleem Club NMAMIT Nitte which is an acting club. I have participated in many
                 street play competitions.  `
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
         <div className="extraDiv" >  
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
                    <h3  className="extracur" onClick={()=>this.openModal(item.name,item.content)} >{item.name}</h3>    
               )}
        </div>
               
   )
}
}
export default extracur