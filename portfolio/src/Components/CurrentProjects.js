import WaveBrigadeRoomDemo from "../Assets/Images/WaveBrigade-Room-Demo.png"

export default function CurrentProjects()
{
    return (
        <div className="projects">
            <h1 align="left"> <u>Current Projects</u> </h1>
            <h2 align="center">Media Effects Learning Hub</h2>
            <p> 
                Inspired by Kahoot, Wave Brigade is a sponsored full-stack web application for the University of Nevada, Reno's School of Journalism 
                which will allow students to study how media affects people both physiologically and psychologically through interactive assignments.
                To aid in this research, the<a href="https://www.emotibit.com" target="_blank" rel="noopener noreferrer"> EmotiBit </a>device is employed to measure and analyze users' vitals.
                The front-end is built using React, Tailwind, and NextUI, while the back-end uses Express, Socket.io, and PostgreSQL. This project is expected to be finished by 
                May of 2025.
            </p>
            <img src={WaveBrigadeRoomDemo} alt="Wave Brigade Lobby Demonstration" width="854" height="560"></img>

            <span className="navbar-text">
                <div className="center-button">
                    <a href="https://github.com/Andrade-Sebastian/CapstoneGroup9" target="_blank" rel="noopener noreferrer">
                        <button> GitHub </button> 
                    </a>

                    <a href="https://www.figma.com/design/PPHtnf90Aurt4YhelqoEI3/Wave-Brigade?node-id=0-1&node-type=canvas&t=jAuY0BRpgDTF3pSV-0" target="_blank" rel="noopener noreferrer">
                        <button>Figma UI</button>
                    </a>
                </div>
            </span>
        </div>
    )
}