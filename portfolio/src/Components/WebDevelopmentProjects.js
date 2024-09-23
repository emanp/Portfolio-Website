
export default function WebDevelopmentProjects()
{
    return (
        <div className="projects">
            <h1 align="left"> <u> Web Development </u> </h1>
            <h2 align="center"> Enhanced Class Search </h2>
            <p>Tired of your school's class search not working properly? Look no further than our
                improved class search website. 
            </p>
            {/*link to the actual website here*/}
            {/*and let them play with it*/}
            {/*Video for now, though*/}
            <iframe width="854" height="480"
                src="https://www.youtube.com/embed/WA8kRL0CD5A?si=gt24U3TPjNd4pqyN&autoplay=1&mute=1&loop=1">
            </iframe>
            <p>Collaborated with a team of 6 developers to create the front-end for an enhanced version of the
PeopleSoft class search system used by the University of Nevada, Reno. Key improvements included
advanced filtering options, a user-friendly interface, and a Google Calendar integration for
real-time schedule planning. JavaScript, jQuery, CSS, and HTML were used for styling and logic,
while AWS was used to host the website </p>


            <span className="navbar-text">
                    <div className="center-button">
                        <a href="">
                            <button> GitHub Needslink </button> 
                        </a>
                    </div>
            </span>
            {/* <h1 align="center"> UNR Old Campus Map </h1> */}
        </div>
    )
}