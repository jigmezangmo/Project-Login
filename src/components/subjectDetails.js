import React from 'react'
import { Link } from 'react-router-dom'

const container = {
    display:"grid",
    // background:"#ccc"
}
const headingPrimary = {
    display:"flex",
    justifyContent:"center",
    fontSize:"30px",
    textTransform:"uppercase",
    color:"#ff7730"


}
const subjectCard = {
    display:"grid",
    gridTemplateColumns:"repeat(3, 350px)",
    gridGap:"2em",
    margin:"auto"
   
    
}
const subjectBox = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    background:"#2ea44f",
    borderRadius:"1.5em",
    

}
const image = {
    width:"100px",
    height:"100px",
    borderRadius:"100px",
    marginTop:"10px"
}
const headerSecondary = {
    color:"white",
    textTransform:"uppercase",
    fontWeight:"700"
}
const paraStyle = {
    color:"white",
    textAlign:"center",
    fontFamily:""
}
const startBtn = {
    color:"white",
    fontSize:"1.2em",
    textTransform:"uppercase",
    marginBottom:"1em"
}
function SubjectDetails (props){
    return (
    //     <div className="subject-card">
    //     <img src={props.subject.imgUrl}/>
    //     <h3>{props.subject.name}</h3>
    //     <p>{props.subject.description}</p>
    //     <button>{props.subject.}</button>
    // </div>
    <div style={container} className="container">
     <h2 style = {headingPrimary} className="heading-Primary">class-X-subject</h2>
                 
    <div style = {subjectCard} className="subject-card">
            <div style = {subjectBox} className="subject-box">
             <img style = {image} src="components/images/chemistry1.jpg" className="feature-img" alt="image"/>
             <h3 style = {headerSecondary} >Biology</h3>
             <p style = {paraStyle} >biology involves the study of living organisms</p>
             <Link style = {startBtn} to ="">Start</Link>
            </div>        
    
        <div style = {subjectBox} className="subject-box">
           <img style = {image} src="components/images/chemistry1.jpg" className="feature-img" alt="image"/>
           <h3 style = {headerSecondary} >chemistry</h3>
           <p style = {paraStyle} > Chemistry is the scientific discipline involved with elements,atoms, molecules and ions.</p>
           <Link style = {startBtn} to ="">Start</Link>
         </div>
    
         <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/geo1.jpg" className="feature-img" alt="image"/>
          <h3 style = {headerSecondary} >computer science</h3>
          <p style = {paraStyle} >Computer Science is the study of computers and computational systems.</p>
          <Link style = {startBtn} to ="">Start</Link>
         </div>
         
      
        <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/geo1.jpg" className="feature-img" alt="image"/>
         <h3 style = {headerSecondary} >geography</h3>
         <p style = {paraStyle} >Geography is the study of places and the relationships between people and their environments.</p>
         <Link style= {startBtn} to ="">Start</Link>
        </div>

        <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/chemistry1.jpg" className="feature-img" alt="image"/>
         <h3 style = {headerSecondary} >history</h3>
         <p style = {paraStyle} >History is the study of the human past as it is described in written documents left behind by humans.</p>
         <Link style= {startBtn} to ="">Start</Link>
        </div>

        <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/chemistry1.jpg" className="feature-img" alt="image"/>
         <h3 style = {headerSecondary} >english</h3>
         <p style = {paraStyle} >English is a West Germanic language that was first spoken in early medieval England.</p>
         <Link style= {startBtn} to ="">Start</Link>
        </div>

        <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/maths.jpg" className="feature-img" alt="image"/>
         <h3 style = {headerSecondary} >maths</h3>
         <p style = {paraStyle} >Mathematics includes the study of such topics as quantity, structure, space, and change.</p>
         <Link style= {startBtn} to ="">Start</Link>
        </div>

        <div style = {subjectBox} className="subject-box">
         <img style = {image} src="components/images/chemistry1.jpg" className="feature-img" alt="image"/>
         <h3 style = {headerSecondary} >chemistry</h3>
         <p style = {paraStyle} >biology involves the study of living organisms</p>
         <Link style= {startBtn} to ="">Start</Link>
        </div>
    
         <div style = {subjectBox} className="subject-box">
                  <img style = {image} src="components/images/biology.jfif" className="feature-img" alt="image"/>
                  <h3 style = {headerSecondary} >maths</h3>
                  <p style = {paraStyle} >biology involves the study of living organisms</p>
                 <Link style= {startBtn} to ="">Start</Link>
         </div>

    </div>
    </div>
    )
}
export default SubjectDetails