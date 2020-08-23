import React from 'react'
import './skills.css'

let skillContent={
    Languages:[ "C","C++","Java"],
    Web:["HTML","CSS","Javascript"],
    Frameworks:["Bootsrtrap","JQuery","React"],
    Tools:["Visual Studio Code","XAMPP"],
    Backend:["php"],
    OperatingSystem:["Windows","Ubuntu"],
    Database:["MSSQL"]
         
    
}



 
let skills=(props)=>{
   return(
         <section id="skillDiv">
              {
               Object.entries(skillContent).map(([key,value])=>
                  <section id="skills">
                    
                        <h2>{key}</h2>
                   { value.map((val)=>
                            <h3> 
                                {val}
                            </h3>
                    )}
                </section>
              )
             }
            </section>
        
   )
}
export default skills