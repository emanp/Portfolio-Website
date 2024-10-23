import classSearchPic from "../Assets/Images/classSearchPic.png";
import { useMediaQuery } from "react-responsive";

export default function WebDevelopmentProjects()
{
    const isDesktop = useMediaQuery({minWidth: 768});

    
    return (
        <div className="projects">
            <h1 align="left"> <u> Web Development </u> </h1>
            <h2 align="center"> Enhanced Class Search </h2>

            <p>Tired of your school's class search not working properly? Look no further than our
                improved class search website.</p>
            
            {isDesktop ? <img width="854" height="480" alt="Class search website demonstration" src={classSearchPic}></img> : <img alt="Class search website demonstration" className="mobile-image-container" src={classSearchPic}></img>}
            
            <p>Collaborated with a team of 6 developers to create the front-end for an enhanced version of the
PeopleSoft class search system used by the University of Nevada, Reno. Key improvements included
advanced filtering options, a user-friendly interface, and a Google Calendar integration for
real-time schedule planning. JavaScript, jQuery, CSS, and HTML were used for styling and logic,
while AWS was used to host the website 
            </p>

            <span className="navbar-text">
                    <div className="center-button">
                        <a href="https://github.com/emanp/Class-Search" target="_blank" rel="noopener noreferrer">
                            <button> GitHub </button> 
                        </a>
                    </div>
            </span>
        </div>
    )
}