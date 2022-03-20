import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Contact({ darktheme, open, submit, error, sopen, serror }) {
    return (
        <div className="h-screen">
            <div className={`container mb-5 d-flex justify-content-center align-items-center flex-column`}>
                <h1 data-aos="fade-right" className={`mt-8 text-center ${darktheme ? 'text-white':'text-black'}`}>Contact</h1>
                <Alert onClose={() => sopen(false)} dismissible className={`${open?"d-block":"d-none"} mt-3`} variant="success">Successfully sent message!</Alert>
                <Alert onClose={() => serror(false)} dismissible className={`${error?"d-block":"d-none"} mb-3`} variant="danger">Oopsie! Something went wrong!</Alert>
                <div data-aos="fade-right" className={`${darktheme?'bg-black':'bg-secondary'} drop-shadow-2xl rounded-2 h-auto py-3 px-4`}>
                    <h6 className={darktheme?'text-white':'text-white'}>Name</h6>
                    <input id="name" placeholder='Your name here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} mb-4 rounded pl-2 py-1 text-sm font-medium`}></input>
                    <h6 className={darktheme?'text-white':'text-white'}>Email</h6>
                    <input id="email" type="email" placeholder='Your email here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} mb-4 rounded pl-2 py-1 text-sm font-medium`}></input>
                    <h6 className={darktheme?'text-white':'text-white'}>Message</h6>
                    <textarea id="message" type="email" placeholder='Your message here' className={`border-1 ${darktheme ? "border-white":"border-black"} ${darktheme?'placeholder:text-gray-400 text-white bg-neutral-800':'text-black bg-white'} rounded pl-2 py-1 text-sm font-medium w-[208px] h-[10rem]`}></textarea><br/>
                    <button style={{outline: "none", border: "none"}} onClick={submit} className="rounded-2 mt-1 px-2 py-1 bg-info text-white">Submit</button>
                </div>
            </div>
        </div>
    )
}