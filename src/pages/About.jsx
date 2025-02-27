import React from 'react'
import { assets } from '../assests/assets'
import "./About.css"

const About = () => {
  return (
    <div className='aboutcontainer container'>
      <div className='about-head'>
        <p>About <span>Us</span></p>
      </div>

      <div className='about-section'>
        <img src={assets.about_img} alt="" className='about-img'/>
        <div className='about-content'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsam. Autem, distinctio. Repellat aut similique deserunt! Pariatur voluptatibus voluptatum illo autem reiciendis praesentium. Facilis architecto ex natus quam quis iusto eveniet est deleniti optio consequatur. Corrupti ab deleniti sequi voluptate in officiis veniam temporibus, quia facere excepturi vero tempora culpa?</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio, deleniti doloribus eum tempora aliquid explicabo dolor rerum aspernatur cupiditate corporis rem praesentium totam repudiandae illo voluptates sint libero voluptatibus nihil tempore eius minima? Earum saepe aut ratione necessitatibus magnam error beatae a velit amet quo. Voluptate architecto dignissimos odit.</p>

          <b>Our Vission</b>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed pariatur perspiciatis voluptate corrupti ad nesciunt voluptatem amet. Dolorem numquam aliquam, quod soluta facere culpa consectetur veritatis ipsa excepturi voluptates laborum commodi? Adipisci aperiam magnam consequatur soluta! Quasi placeat cumque, quisquam, officia, aperiam ex inventore porro eveniet libero alias reiciendis!</p>
        </div>
      </div>
      
    </div>
  )
}

export default About