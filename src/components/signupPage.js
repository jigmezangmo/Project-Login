import React, {Component} from "react"
import { Link } from "react-router-dom"
// import Mystyle from "./mystyle.css"
const container = {

    width: "500px",
    height: "600px",
    margin: "auto",
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    background: "#FCEDDA",
    boxShadow: "5px 10px 15px #888888"
    // textAlign:"center",
   
}
const header= {
    fontSize: "24px",
    fontWeight: "600",
    margin: "25px 0 10px 0",
    color: "#EE4E34"  
}
// const image = {
//     width:"80px",
//     height:"80px",
//     justifyContent:"center",
//     borderRadius: "20px",
  
//     background: "white"
// }
const form= {
    marginTop: "2em",
    display: "flex",
    flexDirection: "column",
}
const inputGroup = {
    marginBottom:"20px"
}
const forgotPassword = {
    color: "#EE4E34",
     textAlign: "center",
     padding: "10px"
}
const signupBtn = {
    borderRadius:"10px",
    height:"30px",
    width:"250px",
    border:"1px solid #ccc"
    // margin:"auto"
}

class Singup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div style={container} className="container">
                <div  style={header} className="header">SignUp Form</div>
                <div className="image">
                    <img  src="components/images/signlogo.webp" width="60" height="60"/>
                </div>

                <div style={form} className="form">

                <div style = {inputGroup} className="input-group">
                    <label style = {{color:"#EE4E34", fontSize:"1.2em"}} htmlFor="username">User Name</label> <br/>
                    <input 
                    style = {{
                        width:"250px",
                        height:"25px", 
                        marginTop:"5px",
                        borderRadius:"10px",
                        border:"1px solid #ccc"
                    }}
                    type="text" 
                    value={this.state.username} 
                    name="username"
                    className="login-input" 
                    placeholder=" Enter user name" 
                    onChange={this.handleChange} 
                />
                </div>
               
                <div className="input-group">
                    <label style = {{color:"#EE4E34", fontSize:"1.2em"}} htmlFor="user-id">User-Id</label><br/>
                    <input 
                    style = {{
                        width:"250px",
                        height:"25px", 
                        margin:"5px 0 20px 0",
                        borderRadius:"10px",
                        border:"1px solid #ccc"
                
                        }}
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    className="login-input"
                    placeholder=" user-id" 
                    onChange={this.handleChange} 
                />
                </div>

                <div className="input-group">
                    <label style = {{color:"#EE4E34", fontSize:"1.2em"}} htmlFor="student-id">Student-Id</label><br/>
                    <input 
                    style = {{
                        width:"250px",
                        height:"25px", 
                        margin:"5px 0 20px 0",
                        borderRadius:"10px",
                        border:"1px solid #ccc"
                
                        }}
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    className="login-input"
                    placeholder=" student-id" 
                    onChange={this.handleChange} 
                />
                </div>

                <div className="input-group">
                    <label style = {{color:"#EE4E34", fontSize:"1.2em"}} htmlFor="password">Password</label><br/>
                    <input 
                    style = {{
                        width:"250px",
                        height:"25px", 
                        margin:"5px 0 20px 0",
                        borderRadius:"10px",
                        border:"1px solid #ccc"
                
                        }}
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    className="login-input"
                    placeholder=" Password" 
                    onChange={this.handleChange} 
                />
                </div>

                <div style = {forgotPassword} className="forgot-password">Forgot Password</div>

                <Link to="">
                <button style = {signupBtn} type="button" className="signup-btn">Sign Up</button>
                </Link>
                {/* <h1>{this.state.username} {this.state.password}</h1> */}
            </div>
            </div>
           
        )
    }
}

export default Singup

// var Spinner = require('react-spinkit');

// <Spinner name='double-bounce' />