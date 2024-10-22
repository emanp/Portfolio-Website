// Footer.js
import React from 'react';

export default function Footer()
{


  return (
    <footer style={{
      backgroundColor: '#200840', 
      color: '#fff',
      padding: '5px',
      textAlign: 'center', 
      position: 'relative',
      bottom: 0,
      width: '100%'}}>
        <h3 align="center"> Like what you see? </h3>

        <span className="navbar-text">
                <div className="center-button">
                    <a href="https://drive.google.com/drive/folders/1pI1NIo28_cHaNpNwlHZkXnfUf-En5w8z?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button>See More</button>
                    </a>
                    <a href="#/Contact" >
                        <button> Contact Me! </button> 
                    </a>
                </div>
        </span>
        <p className='text-start' style={{fontSize: "8px"}}>&copy; {new Date().getFullYear()} Eman P. All rights reserved.</p>
    </footer>
  )
}
