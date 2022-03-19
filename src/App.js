import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar.js'
import Home from './components/Home.js'
import SignUp from './components/SignUp.js';
import Login from './components/Login.js'
import ErrorPage from "./components/404.js";
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [darkmode, setDarkmode] = useState(() => {
    try {
      const value = localStorage.getItem("darkmode")

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem("darkmode", JSON.stringify(false))
        return false;
      }
    } catch (err) {
      return false;
    }
  })

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    })
  }, [])

  const changeTheme = () => {
    const newTheme = !darkmode
    setDarkmode(newTheme)
    localStorage.setItem("darkmode", JSON.stringify(newTheme))
  }

  return (
    <div style={darkmode?{background: "rgb(33,37,41,0.9)"}:{}} className={`min-vh-100`}>
      <Router>
        <NavBar darkmode={darkmode} changeTheme={changeTheme}/>
        <Switch>
          <Route exact path="/" component={() => <Home darkmode={darkmode}/>}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
