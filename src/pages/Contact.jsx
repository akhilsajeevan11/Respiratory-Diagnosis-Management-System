import React from 'react'
import "./Contact.css"
import { assets } from '../assests/assets'

const Contact = () => {
  return (
    <div className='contactpage container'>
      <div className='contact-head'>
        <p>Contact <span>Us</span> </p>
      </div>

      <div className='contact-section'>
        <img src={assets.contact_img} alt="" className='contact-img'/>
        <div className='contact-content'>
          <p>Our Office</p>
          <p>54709 Willms Station <br />
          Suite 350, Washington, USA</p>
          <p>Tel: (+91) 9000000000</p>
          <p>Email: dummy@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact