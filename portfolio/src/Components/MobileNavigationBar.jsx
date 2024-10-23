import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import linkedInIcon from "../Assets/Images/linkedIn-icon.svg";
import githubIcon from "../Assets/Images/github-icon.svg";
import house from "../Assets/Images/house.svg"
import mailIcon from "../Assets/Images/mail.svg";

export default function MobileNavigationBar()
{
    const [pathIsHome, setPathIsHome] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    
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

    useEffect(() => {
        if (location.pathname === "/home")
        {
            setPathIsHome(true);
        }
    }, [location.pathname]); // Run effect when location.pathname changes

    //Debugging
    console.log(location.pathname);

    const navigateTo = useNavigate();

    return (
        <div>
            <Navbar expand="lg" className={(scrolled ? "scrolled" : "")}>
                <Container className="navbar-text">
                                    {/*for now*/} 
                    {pathIsHome ? <div></div> 
                    : scrolled ? (<Nav> <Nav.Link href="#/home" style={{ color: 'white' }}>Home</Nav.Link> </Nav>) : (<span ><a href="#/home"><img src={house} alt="Home"></img></a></span>)}

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/emanuelle-pelayo-544523315/" target="_blank" rel="noopener noreferrer"> <img src={linkedInIcon} alt="LinkedIn" /> </a>
                            <a href="https://github.com/emanp" target="_blank" rel="noopener noreferrer"> <img src={githubIcon} alt="GitHub" /> </a>
                            <a href="#/contact"><img src={mailIcon} alt="Send Me Some Mail"></img></a>
                        </div>
                        
                    </span>
                </Container>
            </Navbar>
        </div>      
    );
}