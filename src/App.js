import React, { Component } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';


class App extends Component{
   render(){
      return(
         <div>
            <Login/>
            <SignUp/>
            
         </div>
      );
   }
}
export default App;