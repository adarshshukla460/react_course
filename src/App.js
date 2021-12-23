import logo from './logo.svg';
import React,{useState} from"react"
import './App.css';
import Homepage from "./comp/homepage/homepage"
import Login from "./comp/login/login"
import Register from "./comp/Register/register"
 import {
   BrowserRouter as Router,  Switch, Route} from "react-router-dom"


   function App() {
 

    const[ user,setLoginUser] = useState({})

    return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id
              ?
              <Homepage setLoginUser={setLoginUser} />
              :
              <Login setLoginUser={setLoginUser}/>
            }
            </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
