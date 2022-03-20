import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Discussion from './components/Discussion.js'
import Contact from './components/Contact.js'
import ErrorPage from "./components/404.js";
import Footer from './components/Footer.js';
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'mdb-react-ui-kit'

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
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  const submit = () => {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    fetch(`https://mdhashback.herokuapp.com/sendEmail?name=${name.value.toString()}&email=${email.value.toString()}&message=${message.value.toString()}`).then(function(response) {
      return response.text()
    }).then(function(data) {
      if (data.toString().includes("went wrong")) {
        setError(true)
      } else {
        setOpen(true)
      }
    })
  }

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
          <Route exact path="/discussions" component={Discussion}/>
          <Route exact path="/projects" component={() => <Projects darkmode={darkmode}/>}/>
          <Route exact path="/contact" component={() => <Contact darktheme={darkmode} open={open} submit={submit} error={error} sopen={setOpen} serror={setError}/>}/>
          <Route component={() => <ErrorPage darkmode={darkmode}/>}/>
        </Switch>
        <Footer darkmode={darkmode}/>
      </Router>
    </div>
  );
}

export default App;
