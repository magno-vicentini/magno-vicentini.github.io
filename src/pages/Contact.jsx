import React from 'react'
import '../styles/Contact.scss'

import gmailContact from '../assets/images/gmail-contact.png'
import githubContact from '../assets/images/github-contact.png'
import linkedinContact from '../assets/images/linkedin-contact.png'

export default function Contact() {
  return (
    <div className='contacts' id='contact'>
      <h1>Contact</h1>
      <h3>Let's work together!</h3>

      <div className="contacts-container">
        <a href="https://github.com/magno-vicentini" target="_blank" rel="noreferrer">
          <img src={githubContact} alt="github contact" />
        </a>
        <a href="https://www.linkedin.com/in/magno-vicentini/" target="_blank" rel="noreferrer">
          <img src={linkedinContact} alt="linkedin contact" />
        </a>

        <div className='gmail-container'>
          <img src={gmailContact} alt="gmail contact" />
          <div>magnovicentini@gmail.com</div>
        </div>       
      </div>

    </div>
  )
}
