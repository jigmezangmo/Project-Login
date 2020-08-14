import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import SubjectDetails from './subjectDetails';


class HomePage extends Component{
  render(){
      return(
        <div className="subject-container">
        <SubjectDetails
            subject={{name: "Biology", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "Chemistry", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "Physic", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />   

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        />

        <SubjectDetails
            subject={{name: "History", imgUrl: "components/images/chemistry1.jpg", header:"History", description: "biology involves the study of living organisms", button: "start"}}
        /> 
        
        
    </div>

   
      )
  }
}
export default HomePage