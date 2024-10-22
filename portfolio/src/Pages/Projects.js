import GameDevelopmentProjects from "../Components/GameDevelopmentProjects";
import WebDevelopmentProjects from "../Components/WebDevelopmentProjects";
import EmbeddedSystemsProjects from "../Components/EmbeddedSystemsProjects";
import CurrentProjects from "../Components/CurrentProjects";
import NavigationBar from "../Components/NavigationBar";
import backgroundImg from "../Assets/Images/banner-bg.png"
import Footer from "../Components/Footer";

export default function Projects()
{
  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`, backgroundAttachment: "fixed"}}>
        <NavigationBar />
        <GameDevelopmentProjects />
        <WebDevelopmentProjects />
        <EmbeddedSystemsProjects />
        <CurrentProjects />

        <Footer />
    </div>
  )
}