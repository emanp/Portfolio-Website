
import { useState } from "react";
import validator from 'validator'; //for email validation - https://www.npmjs.com/package/validator
import emailjs from "@emailjs/browser";
import { sendForm } from "emailjs-com"; //for sending emails to myself - emailjs.com
import { useNavigate } from "react-router-dom";
import backgroundImg from "../Assets/Images/banner-bg.png";


export default function ContactForm()
{
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const [messageIsSent, setMessageIsSent] = useState(false);

    const navigateTo = useNavigate();

    const isValidForm = (email !== "" && message !== "" && name !== "") && isValidEmail(email);

    const onSubmit = (e) => {
        e.preventDefault();

        if (isValidForm)
        {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
        }
        setMessageIsSent(true);
        //Navigate to "#/home" after 3 seconds
        setTimeout(() => navigateTo('/home'), 3000);
    };

    return (
        <div>
            <div>
                <h1 style={{textAlign: 'center'}}>Contact Me!</h1>
                <p style={{textAlign: 'center'}}>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
            </div>

            <div className="form-container">

                <form onSubmit={onSubmit}>
                    <div>
                        <div><label htmlFor="Name"> Name* </label></div>
                        <input type="text" name="from_name" onChange={(e) => setName(e.target.value)}/> 
                    </div>

                    <div>
                        <div><label htmlFor="email"> Email* </label></div>
                        <input type="text" name="email_from" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <div><label htmlFor="Message"> Message* </label></div>
                        <textarea name="message" rows="5" cols="33" style={{ fontSize: '1rem', padding: '10px' }} onChange={(e) => setMessage(e.target.value)} />
                    </div>

                    <span  style={{alignSelf: "center"}}>
                        {!messageIsSent ? (<input type="submit" value="Send Message" disabled={!isValidForm} />) 
                        : (
                        <p style={{color:"#38aae8", textAlign:"center"}}>Message sent!</p>)}
                    </span>
                </form>
            </div>
        </div>
    )
}
  

/**
 * @param {string} email- The email to be validated.
 */
function isValidEmail(email)
{
    let validator = require("validator")
    const isEmail = validator.isEmail(email)
    console.log(isEmail)
    return isEmail;
}
