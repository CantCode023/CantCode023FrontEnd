import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Accordion } from 'react-bootstrap'

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
        <div style={{minHeight:"300vh"}}>
            <div className="mt-5 container h-50 d-flex flex-lg-row-reverse flex-column-reverse justify-content-center">
                {/* <section id="home"> */}
                    <img className="ps-lg-5 ps-0 IMAGEPOS" data-aos="fade-left" style={{marginTop: "15px"}} src="cantcode.png"/>
                    <div data-aos="fade-right" className="header h-100 w-55 text-lg-start text-center">
                        <p className={`text-secular fs-5 ${darkmode?"text-white":"text-black"}`} style={{marginTop: "100px"}}>HELLO</p>
                        <h1 className={`text-secular ${darkmode?"text-white":"text-black"}`}>I'm <a className="text-decoration-none text-primary">Putera</a> Danish Danial.</h1>
                        <p className={`fw-medium ${darkmode?"text-white":"text-black"}`}>This is Putera Danish Danial,<br/> an aspiring {checkAge()} year-old Software Developer, Web Developer and Visual Designer. <br/>Located in Malaysia and is looking for a part time job.</p>
                        <Button href="/#aboutme">Learn more</Button>
                    </div>
                {/* </section> */}
            </div>
            <div className="mt-5 container h-50 d-flex flex-lg-row-reverse flex-column-reverse justify-content-lg-evenly justify-content-center">
                <div className="text-lg-start text-center">
                    <h1 style={{marginTop: "25rem"}} className={`text-secular ${darkmode?"text-white":"text-black"}`}>My Skills</h1>
                    <div className="skills">
                        <Accordion className="">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Languages</Accordion.Header>
                                <Accordion.Body className="d-flex flex-column justify-content-evenly">
                                    <Button variant="outline-primary" disabled>Python</Button>
                                    <Button className="mt-2" variant="outline-warning" disabled>JavaScript</Button>
                                    <Button className="mt-2" variant="outline-success" disabled>HTML/CSS</Button>
                                    <Button className="mt-2" variant="outline-primary" disabled>Lua</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Frameworks & Libraries</Accordion.Header>
                                <Accordion.Body className="d-flex flex-column justify-space-evenly">
                                    <Button variant="outline-dark" disabled>Flask</Button>
                                    <Button className="mt-2" variant="outline-primary" disabled>React</Button>
                                    <Button className="mt-2" variant="outline-warning" disabled>Tailwind</Button>
                                    <Button className="mt-2" variant="outline-danger" disabled>Bootstrap</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="text-lg-start text-center ABOUT">
                    <h1 style={{marginTop: "25rem"}} className={`text-secular ${darkmode?"text-white":"text-black"} w-100`}>About Me</h1>
                    <div class="text-lg-start text-center ABOUT1">
                        <p className={darkmode?"text-white":"text-black"}>Greetings! My name is Putera Danish Danial or known as CantCode and I am a {checkAge()}-year-old software programmer. I do Apps, Websites, Bots, Web Scraping, APIs, and a bunch of other cool stuffs!</p>
                        <br/>
                        <p className={darkmode?"text-white":"text-black"}>I'm currently still a student studying at SMK Tasek Damai. In my free time, I play video games with my friends or code something that came into my mind.</p>
                        <br/>
                        <p className={darkmode?"text-white":"text-black"}>I've always looked for a part time coding job with the age requirement 13 years old and older, but it's hard to find them, most of the part time job requires a software engineering degree. So if you'd like to hire me, please use the contact page to contact me or DM me in Discord Blue Duck#8344</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
