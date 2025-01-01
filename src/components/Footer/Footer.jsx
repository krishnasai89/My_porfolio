import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="row footer-row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 footer-col">
            <p className='footer-text'>&copy; 2025 Krishna. All rights reserved.</p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-6 col- footer-col">
            <ul className="social-icon">
              <li><a href="https://www.linkedin.com/in/krishna-sai-vellampalli/"><i className='fa fa-linkedin'></i></a></li>
              <li><a href="https://github.com/krishnasai89"><i className='fa fa-github'></i></a></li> 
              <li><a href="mailhref:krishnasaivellampalli@gmail.com"><i className='fa fa-envelope'></i></a></li> 
              <li><a href="https://twitter.com/your_twitter_handle"><i className='fa fa-twitter'></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
