import React, { Component } from 'react'
import SubjectDetails from './subjectDetails'

const sectionOne = {
    padding:"20px"
}
const sectionColumn = {
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr))"
}
const sectionRow = {
    padding: "30px"
}
const Img = {
    width:" 600px",
    height:"400px",
    display:" grid",
    margin:"0 auto"
}
const h1Style = {
    marginBottom: "30px",
    color:"#ff7730",
     fontSize:"3.5rem",
     fontFamily: "sans-serif",
     fontWeight: "bold"
}
const paraStyle = {
    fontSize:"18px",
    color:"#03314b",
    lineHeight: "20px",
    fontFamily: "sans-serif"
}

class HomePage extends Component{
  render(){
      return(
              <div style={sectionOne} className="section-one">
                  <div style={sectionColumn} className="section-column">
                      
                      <div style={sectionRow} className="section-row">
                          <div style={{padding:"10px"}} className="para">
                              <h1 style={h1Style}>Fit learning into<br/>your life</h1>
                              <p style= {paraStyle}>Thinked brings you the knowledge from top nonfiction, <br/> so you can learn anytime, anywhere.</p>
                          </div>
                      </div>

                      <div style={sectionRow} className="section-row">
                      <img style={Img} src="components/images/home 2.png" alt="homeImage"/>
                      </div>
                  </div>
                  <SubjectDetails/>
              </div>
                 
      )
  }
}
export default HomePage