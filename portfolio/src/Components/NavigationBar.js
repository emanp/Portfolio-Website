import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export function NavigationBar()
{


    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={""} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"> <img src={""} alt="LinkedIn" /> </a> /*LinkedIn*/
                            <a href="#"> <img src={""} alt="GitHub" /> </a>
                            <a href="#"> <img src={""} alt="None/FigureOut" /> </a>
                        </div>
                        <button className="vvd" onClick={() => console.log("contact us form")}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}