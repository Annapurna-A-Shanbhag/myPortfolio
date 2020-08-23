import React from 'react'
import Profile from './Profile/Annu.jpg'
import  './about.css'
let about=(props)=>{
    let aboutContent={
        content:[
                "I am a passionate Engineering student in Information Science and Engineering stream studying at NMAMIT Nitte.",
                "I have done many projects in Web development field and looking for more opportunities in this domain",
                "I love to socialize with people and learn something new from them.",
                "A teaching enthusiasist.",
                "An individaul who is always ready for social services and volunteering.",
                "A girl who loves dance",
                "I am an explorer who is always ready to learn new things and experiment with them"
                ]
    }
    return(
    <div>
    <img src={Profile} width="17%" height="17%"  />
     <div className="aboutDiv"> 
      {aboutContent.content.map((item)=>
          <h4 className="about">{item}</h4>
      )}
     
     </div>
     </div>
     

    )

}

export default about