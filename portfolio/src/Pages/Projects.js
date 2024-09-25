import GameDevelopmentProjects from "../Components/GameDevelopmentProjects";
import WebDevelopmentProjects from "../Components/WebDevelopmentProjects";
import EmbeddedSystemsProjects from "../Components/EmbeddedSystemsProjects";
import NavigationBar from "../Components/NavigationBar";


export default function Projects()
{
  return (
    <div>
        <NavigationBar />
        <GameDevelopmentProjects />
        <WebDevelopmentProjects />
        <EmbeddedSystemsProjects />
        <h2 align="center"> Like what you see? </h2>

        <span className="navbar-text">
                <div className="center-button">
                    <a href="#/Contact">
                        <button> Contact Me! </button> 
                    </a>
                </div>
        </span>
    </div>
  )
}