import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Projects({ darkmode }) {
  return (
    <div style={{minHeight: "200vh"}} className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className={`text-center mt-5 mb-5 ${darkmode?"text-light":"text-dark"}`}>Projects</h1>
        <div className="row">
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/AsposeCompressor.png"/>
                    <Card.Body>
                        <Card.Title>Aspose Compressor</Card.Title>
                        <Card.Text>Python package to compress video with 10% compression size.</Card.Text>
                        <Button href="https://github.com/CantCode023/aspose_compressor" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/webcalc.jpg"/>
                    <Card.Body>
                        <Card.Title>Web Calculator</Card.Title>
                        <Card.Text>A web calculator made from scratch.</Card.Text>
                        <Button href="https://github.com/CantCode023/WebCalculator" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/ScrapingThunder.png"/>
                    <Card.Body>
                        <Card.Title>Scraping Thunder</Card.Title>
                        <Card.Text>Scrape paid APIs like <a href="https://haveibeenpwned.com">https://haveibeenpwned.com</a> without paying a single penny!</Card.Text>
                        <Button href="https://github.com/CantCode023/ScrapingThunder" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>

        <div className="row mt-4">
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/TodoList.jpg"/>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>A website that manages your todos. Made from scratch.</Card.Text>
                        <Button href="https://github.com/CantCode023/TodoList" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/HijrahToMasihi.jpg"/>
                    <Card.Body>
                        <Card.Title>Hijrah To Masihi</Card.Title>
                        <Card.Text>A website to convert hijrah year to masihi year.</Card.Text>
                        <Button href="https://github.com/CantCode023/HijrahToMasihi" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "2rem"}} className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/WallpaperAPI.jpg"/>
                    <Card.Body>
                        <Card.Title>Wallpaper API</Card.Title>
                        <Card.Text>An API that gives a random wallpaper, made with FastAPI.</Card.Text>
                        <Button href="https://replit.com/@Smktd/WallpaperAPI#main.py" variant="primary">Go to project</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <h1 className={`text-center mt-5 mb-5 ${darkmode?"text-light":"text-dark"}`}>Find out more awesome projects<br/> by me at my github page.</h1>
    </div>
  )
}
