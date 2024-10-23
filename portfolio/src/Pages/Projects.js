import GameDevelopmentProjects from "../Components/GameDevelopmentProjects";
import WebDevelopmentProjects from "../Components/WebDevelopmentProjects";
import EmbeddedSystemsProjects from "../Components/EmbeddedSystemsProjects";
import CurrentProjects from "../Components/CurrentProjects";
import NavigationBar from "../Components/NavigationBar";
import backgroundImg from "../Assets/Images/banner-bg.png";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";
import MobileNavigationBar from "../Components/MobileNavigationBar";


export default function Projects()
{

  const isMobile = useMediaQuery({minWidth: 320, maxWidth: 767});

  const isDesktop = useMediaQuery({minWidth: 768});

  console.log("isDesktop: " + isDesktop)
  console.log("isMobile: " + isMobile)


  return (
    <div style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      minHeight: "100vh", 
      width: "100%", 
      overflow: "hidden"}}>                   
        {isDesktop ? <NavigationBar /> : <MobileNavigationBar />}
        <GameDevelopmentProjects />
        <WebDevelopmentProjects />
        <EmbeddedSystemsProjects />
        <CurrentProjects />
        <Footer />
    </div>
  )
}