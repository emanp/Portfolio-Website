import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import Banner from "../Components/Banner";
import backgroundImg from "../Assets/Images/banner-bg.png";
import MobileNavigationBar from "../Components/MobileNavigationBar";

export default function Home()
{
// 
//     @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
//     @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }

//     @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
//     @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
//     @media (min-width:1281px) { /* hi-res laptops and desktops */ }
//      
    //change as needed -- chose 768 as it seems to be like in the middle
    
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
            backgroundRepeat: "no-repeat",  
            minHeight: "100vh", 
            height: "100%",             
            width: "100%",
            overflow: "hidden"                   
          }}>
            {isDesktop ? <NavigationBar /> : <MobileNavigationBar />}
            <Banner />
        </div>
    )
}