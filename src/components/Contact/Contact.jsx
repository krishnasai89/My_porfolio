import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact' id='Contact'>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <h5>GET IN TOUCH</h5>
          <h1>Contact</h1>
          <div className="container">
            <p>Get in touch with us and let us know how we can help you.</p>
            <strong className='fa fa-envelope'> : <a href="mailto:krishnasaivellampalli@gmail.com">krishnasaivellampalli@gmail.com</a></strong><br/>
            <strong className='fa fa-phone'> : +91-8919204287</strong>
            <ul>
              <li className='contact-li'><a href="https://www.linkedin.com/in/krishna-sai-vellampalli/" className="fa fa-linkedin"></a></li>
              <li className='contact-li'><a href="https://github.com/krishnasai89" className="fa fa-github"></a></li>
              <li className='contact-li'><a href="" className="fa fa-instagram"></a></li>
              <li className='contact-li'><a href="" className="fa fa-facebook"></a></li>
              <li className='contact-li'><a href="" className="fa fa-twitter"></a></li>
            </ul>
          </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <form className='form'>
              <div className="container">
                <div className="form-group">
                  <label htmlFor="yourname">Your Name <span>*</span></label>
                  <input type="text" className='form-control' id="yourname" placeholder="Your Name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email <span>*</span></label>
                  <input type="email" className='form-control' id='youremail' placeholder='Your Email'required/>
                </div>
                <div className="form-group">
                  <label htmlFor="Message">Your Message <span>*</span></label>
                  <textarea className='form-control' id='message' placeholder='Your Message'required/>
                </div>
                <button type='submit' className='btn btn-info'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
