import React, {Component} from "react"
// import Mystyle from "./mystyle.css"
const container = {

    width: "500px",
    height: "450px",
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
const loginBtn = {
    borderRadius:"10px",
    height:"30px"
}

class Login extends Component {
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
                <div  style={header} className="header">Login Form</div>
                <div className="image">
                    <img  src="src/image/user.svg" width="60" height="60"/>
                </div>

                <div style={form} className="form">

                <div style = {inputGroup} className="input-group">
                    <label style = {{color:"#EE4E34", fontSize:"1.3em"}} htmlFor="username">Username</label> <br/>
                    <input 
                    style = {{
                        width:"200px",
                        height:"25px", 
                        marginTop:"5px"
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
                    <label style = {{color:"#EE4E34", fontSize:"1.3em"}} htmlFor="password">Password</label><br/>
                    <input 
                    style = {{
                        width:"200px",
                        height:"25px", 
                        margin:"5px 0 20px 0"
                
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

                <button style = {loginBtn} type="button" className="login-btn">Login</button>
                <h1>{this.state.username} {this.state.password}</h1>
            </div>
            </div>
           
        )
    }
}

export default Login
