import ContactForm from "../Components/ContactForm";
import NavigationBar from "../Components/NavigationBar";
import backgroundImg from "../Assets/Images/banner-bg.png"
import { useMediaQuery } from "react-responsive";
import MobileNavigationBar from "../Components/MobileNavigationBar";

export default function Contact() {

    const isDesktop = useMediaQuery({minWidth: 768});


    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover", 
                backgroundPosition: "center",
                minHeight: "100vh", 
                width: "100%", 
                overflow: "hidden", 
            }}>
            {isDesktop ? <NavigationBar /> : <MobileNavigationBar />}
            <div style={{ height: "100px" }}></div>
            <ContactForm />
        </div>
    );
}