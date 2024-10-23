import { useMediaQuery } from "react-responsive";


export default function EmbeddedSystemsProjects()
{
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        <div className="projects">
            <h1 align="left"> <u> Embedded Systems </u> </h1>
            <h2 align="center"> Swamp Cooler </h2>
            <p> Worked in a group of four to develop a fully customizable swamp cooler capable of monitoring
and regulating room temperature based on user-defined temperature and water level thresholds.
This project was developed through the use of an Arduino MEGA 2560 and ANSI C
programming, alongside an array of specialized modules, sensors, and a breadboard kit. I
collaborated with a teammate to develop the software, research and create documentation, and
assisted in the wiring and physical assembly of the project. </p>
            {isDesktop ? <iframe width="854" height="480" src="https://www.youtube.com/embed/aPLeDOnwAaY?si=-XmeQ7fxTtdy_vno&autoplay=1&mute=1&loop=1"></iframe> : <div className="mobile-video-container">
        <iframe 
            src="https://www.youtube.com/embed/aPLeDOnwAaY?si=-XmeQ7fxTtdy_vno&autoplay=1&mute=1&loop=1" 
            title="YouTube video demonstration of the Swamp Cooler project" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </div>}
            
            <span className="navbar-text">
                <div className="center-button">
                    <a href="https://github.com/Pelayo-Emanuelle/CPE-301-Final-Project-.git" target="_blank" rel="noopener noreferrer">
                        <button> GitHub </button> 
                    </a>
                </div>
            </span>
        </div>
    )
}