
import { useState } from "react";
import validator from 'validator'; //for email validation - https://www.npmjs.com/package/validator
import emailjs from "@emailjs/browser";
import { sendForm } from "emailjs-com"; //for sending emails to myself - emailjs.com

export default function ContactForm()
{
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    console.log("Name: " + name);
    console.log("Message: " + message)
    console.log("Email: " + email)

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
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="Name"> Name: </label>
                <input type="text" name="from_name" onChange={(e) => setName(e.target.value)}/> 
            </div>

            <div>
                <label htmlFor="Message"> Message: </label>
                <input type="text" name="message" onChange={(e) => setMessage(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="email"> Email: </label>
                <input type="text" name="email_from" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <input type="submit" value="Submit" disabled={!isValidForm}/>
        </form>
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
