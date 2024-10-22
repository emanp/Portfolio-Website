import ContactForm from "../Components/ContactForm";
import NavigationBar from "../Components/NavigationBar";
import backgroundImg from "../Assets/Images/banner-bg.png"


export default function Contact() {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundPosition: "center",
                minHeight: "100vh", // Ensure the div covers the full screen height
                width: "100%", // Full screen width
                overflow: "hidden", // Prevents unwanted scrollbars
            }}
        >
            <NavigationBar />
            <div style={{ height: "100px" }}></div>
            <ContactForm />
        </div>
    );
}