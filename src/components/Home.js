import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home({ darkmode }) {
    const checkAge = () => {
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const day = new Date().getDate()

        var age = year - 2008
        if (month == 7 && day == 29) {
        } else {
            age -= 1
        }

        return age
    }

    return (
        <div className="container h-50 d-flex flex-row">
            <div data-aos="fade-right" className="header h-100 w-55">
                <p className={`text-secular fs-5 ${darkmode?"text-white":"text-black"}`} style={{marginTop: "100px"}}>HELLO</p>
                <h1 className={`text-secular ${darkmode?"text-white":"text-black"}`}>I'm <a className="text-decoration-none text-primary">Putera</a> Danish Danial.</h1>
                <p className={`fw-medium ${darkmode?"text-white":"text-black"}`}>This is Putera Danish Danial,<br/> an aspiring {checkAge()} year-old Software Developer, Web Developer and Visual Designer. <br/>Located in Malaysia and is looking for a part time job.</p>
            </div>
            <img data-aos="fade-left" style={{marginTop: "30px", marginLeft: "40px", height: "400px"}} src="cantcode.png"/>
        </div>
    );
}
