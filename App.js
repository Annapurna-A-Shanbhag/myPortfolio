import React,{Component} from 'react'
import About from './Components/About/about'
import Project from './Components/Project/projects'
import Skills from './Components/Skills/skills'
import Extracur from './Components/Extracur/extracur'
import OtherDetails from './Components/OtherDetails/otherDetails'
import Education from './Components/Education/education'
import {BrowserRouter} from 'react-router-dom'
import {Route,NavLink} from 'react-router-dom'
import './App.css'
class App extends Component{
state={
  components:["About","Education","Skills","Projects","Extracurricular","OtherDetails"],

}

    render()
    {
        return(
        <BrowserRouter>
        <div className="appDiv1">
        <div className="appDiv2">
        {this.state.components.map((item)=>
        <h3 className="links"><NavLink to={"/"+item} exact activeClassName="super" activeStyle={{color:'blue'}}>{item}</NavLink></h3>
        )}

         </div>
        {/*this.state.components.map((item)=>
        <Route path={"/"+item} component={item}/>
        )*/}
        <h1 className="title">ANNAPURNA ANANT SHANBHAG</h1>
        <h3 className="tagname">"If it doesn't challenge you, it won't change you."</h3>
        <Route path="/about" component={About} />  
        <Route path="/skills" component={Skills} />  
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Project} />
        <Route path="/extracurricular" component={Extracur} /> 
        <Route path="/otherDetails" component={OtherDetails}/>
        </div>
        </BrowserRouter>
        )
      }
}
export default App