import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from ".../Assets/Images/logo.svg";
import navIcon1 from ".../Assets/Images/nav-icon1.svg";
import navIcon2 from ".../Assets/Images/nav-icon2.svg";
import navIcon3 from ".../Assets/Images/nav-icon3.svg";

//13.20 
export function NavigationBar()
{
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
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
    })
    
    function onUpdateActiveLink(value)
    {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"> <img src={navIcon1} alt="LinkedIn" /> </a>
                            <a href="#"> <img src={navIcon2} alt="GitHub" /> </a>
                            <a href="#"> <img src={navIcon3} alt="None/FigureOut" /> </a>
                        </div>
                        <button className="vvd" onClick={() => console.log("contact us form")}><span>Let's Connect!</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}