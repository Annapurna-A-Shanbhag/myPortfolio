import React from 'react'
import './education.css'
let educationContent={
    Engineering:["NMAM Institute of Technology",'Information Science and Enginnering','Nitte','2017-present','9.34'],
    PreUniversity:['Saraswati Pre University College','PCMC','Kumta','2015-2017','92.66'],
    HighSchool:['CVSK English Medium Highschool','Kumta','2012-2015','98.56'],
    PrimarySchool:['Higher Primary Kannada Medium School','UppinPattan Kumta','2005-2012','A+']
}
let education=()=>{
    return(
        <section id="educationDiv">
        {
         Object.entries(educationContent).map(([key,value])=>
         <section id="education">
             <h3>
                 {key}
             </h3>
              {
              value.map((val)=>
                      <h4> 
                          {val}
                      </h4>
              )
              }
              </section>
        )
       }
  
</section>

    )
}
export default education