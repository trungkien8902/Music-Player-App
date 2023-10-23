import React from 'react'
import "./style.css"

export default function Contact() {
  return (
    <div className='contact-page'>
      <div className="contact_contents">
        <h1>Contact Us</h1>
        <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
        <div>
          <p>(800) 686-6688</p>
          <p>info.deercreative@gmail.com</p>
        </div>
        <div>
          <p>mm</p>
        </div>
        <div>
          <p>Open hours: 8.00-18.00 Mon-Fri</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="follow_us_contents">
        <h1>Follow Us</h1>
        <ul>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  )
}
