import React from 'react'
import './otherDetails.css'
import {Route,Link} from 'react-router-dom'
let detail=[
    {
        content:'My LinkedIn Profile',
        link:'https://www.linkedin.com/in/annapurna-anant-shanbhag-1b4b3a172'
    },
    {
        content:'My Hackerrank Profile',
        link:'https://www.hackerrank.com/annapurna_shanb1'
    }
]
let detail2=[
    {
        content:'My Address',
        content1:'AT&PO:Uppinpattan TQ:Kumta UttaraKannada Karnataka-581362'
    },
    {
        content:'My Email Adress',
        content1:'annapurna.shanbhag99@gmail.com'
    },
    {
        content:'My Birthdate',
        content1:'09-11-1999'
    },
    {
        content:'Languages Known',
        content1:'English, Hindi,Kannada,Konkani,Sanskrit'
    }
]
let connect=()=>{
    return(
    <div className="otherDivs">
    <div style={{marginLeft:'5px'}}>
     {
         detail2.map((item)=>
          <div>
            <h3>{item.content}</h3>
            <h4 style={{display:'inline'}}>{item.content1}</h4>
         </div>  
         )
     }
        { detail.map((item)=>
         <div>
           <h3>{item.content}</h3>
            <a href={item.link}>{item.link}</a>  
          </div> 
         )
         }
    </div>
    </div>)
}

export default connect