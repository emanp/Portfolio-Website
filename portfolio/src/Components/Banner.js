import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import headerImg from "../Assets/Images/header-img.svg";
import MobileNavigationBar from "./MobileNavigationBar";


export default function Banner()
{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Game Developer", "Software Developer"];
    const [currentText, setCurrentText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100); //how quickly the letters change 
    const period = 2000; //Amount of time between each word
    const [activeLink, setActiveLink] = useState("home");
    const isMobile = useMediaQuery({minWidth: 320, maxWidth: 767});

    const isDesktop = useMediaQuery({minWidth: 768});

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [currentText])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);

        setCurrentText(updatedText);

        if (isDeleting)
        {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);

        }
        else if (isDeleting && updatedText === "")
        {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }}

    const navigate = useNavigate();
    const onClickContact = (value) => {
        setActiveLink(value);
        navigate("/" + value);
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {isDesktop ? <h1>{"Hi, I'm Eman!"} <span className="wrap"> {currentText} </span> </h1> : <h1 style={{ fontSize: '50px', paddingTop: '100px'}}>{"Hi, I'm Eman!"} <span className="wrap"> {currentText} </span> </h1>}
                        <p>Based in Reno, NV, I’m a fourth-year Computer Science student passionate about creating engaging and helpful applications with clean, intuitive user interfaces. With experience in Game Development, Embedded Systems, and Full-Stack Web Development, I am dedicated to building innovative solutions that improve everyday life. Open to new opportunities and inquiries.</p>
                        {isMobile  ? <button onClick={() => onClickContact("projects")}> View My Work <ArrowRightCircle size={25}></ArrowRightCircle> </button> : <button onClick={() => onClickContact("contact")}> Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>}
                    </Col>
                    {isDesktop ? (<Col xs={12} md={6} xl={5}> <img src={headerImg} alt="Spaceman Decoration" /> </Col>) : null}
                </Row>
            </Container>
        </section>
    )
}