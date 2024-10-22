import ContactForm from "../Components/ContactForm";
import NavigationBar from "../Components/NavigationBar";
import backgroundImg from "../Assets/Images/banner-bg.png"


export default function Contact() {
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
            <NavigationBar />
            <div style={{ height: "100px" }}></div>
            <ContactForm />
        </div>
    );
}