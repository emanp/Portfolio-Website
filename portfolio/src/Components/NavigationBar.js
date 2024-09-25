import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom"
import logo from "../Assets/Images/logo.svg";
import linkedInIcon from "../Assets/Images/linkedIn-icon.svg";
import githubIcon from "../Assets/Images/github-icon.svg";


export const NavigationBar = () =>
{
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    
    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50)
        {
            setScrolled(true);
        }
        else
        {
            setScrolled(false);
        }
    }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll"), onScroll;
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onClickContact = (value) => {
        setActiveLink(value);
        navigate("/" + value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#/home">
                    <img src={logo} alt="Logo" onClick={() => onClickContact("home")}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        {/* <Nav.Link href="skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link> */}
                        <Nav.Link href="#/Projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/emanuelle-pelayo-544523315/"> <img src={linkedInIcon} alt="LinkedIn" /> </a>
                            <a href="https://github.com/emanp"> <img src={githubIcon} alt="GitHub" /> </a>
                        </div>
                        <button onClick={() => onClickContact("contact")}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

