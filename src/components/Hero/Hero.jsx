import React from 'react'
import './Hero.css'
import Hero_img from '../../assets/Hero_img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className='container'>
      <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <h1 className='hero'>Hi , I'm <span className='hero-name'>KRISHNA SAI VELLAMPALLI</span></h1>
        <ul className='hero-ul'>
          <li><a href="https://www.linkedin.com/in/krishna-sai-vellampalli/" className='btn'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
          <li><a href="https://github.com/krishnasai89" className='btn'><FontAwesomeIcon icon={faGithub} size="2x" /></a></li> 
          <li><a href="mailto:krishnasaivellampalli@gmail.com" className='btn'><FontAwesomeIcon icon={faEnvelope} size="2x" /></a></li> 
          <li><a href="https://twitter.com/your_twitter_handle" className='btn'><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
        </ul>
      </div>
      <div className="col-xl col-lg-6 col-md-6 col-sm-12 col-12">
        <img src={Hero_img} alt="" width='500px' height='400px' className='hero-img'/>
      </div>
      </div>
    </div>
  )
}

export default Hero
