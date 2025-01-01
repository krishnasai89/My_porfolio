import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='Projects' id='Projects'>
      <div className="container">
        <h5>MY WORK</h5>
        <h1>Projects</h1>
        <p className='project-content'>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links href code reposihrefries and live demos in it. It reflects my ability href solve complex problems, work with different technologies, and manage projects effectively.</p>
        <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card project-card">
            <div className="card-header">
              <img src="" alt="" className='card-img-top'/>
            </div>
            <div className="card-body project-card-body">
              <h5 className="card-title">Weather Application</h5>
              <p className="card-text"><small>A weather app contains a user input field for the user, which takes the input of the city name.Once the user enters the city name and clicks on the button, then the API Request is been sent to the OpenWeatherMap and the response is been retrieved in the application which consists of weather, wind speed, description, etc.</small></p>
              <div>
                <ul className='project-ul'>
                  <li className='project-li'>HTML</li>
                  <li className='project-li'>CSS</li>
                  <li className='project-li'>JavaScript</li>
                  <li className='project-li'>API</li>
                </ul>
              </div>
              <a href="https://weather-app-in-html-css-and-java-script.vercel.app" className="btn btn-primary">Demo</a>
              <a href="https://github.com/krishnasai89/Weather-App-in-HTML-CSS-and-JavaScript" className="btn btn-primary ml-3">Source Code</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card project-card">
            <div className="card-header">
              <img src="" alt="" className='card-img-top'/>
            </div>
            <div className="card-body project-card-body">
              <h5 className="card-title">Quiz App</h5>
              <p className="card-text"><small>Quiz App with a built-in timer, utilizing HTML, CSS, and JavaScript. This application is designed to present users with a curated set of questions, each accompanied by a countdown timer, providing an interactive and time-bound quiz experience. Additionally, the app keeps track of users' progress, creating an immersive and dynamic quiz environment.</small></p>
              <div>
                <ul className='project-ul'>
                  <li className='project-li'>HTML</li>
                  <li className='project-li'>CSS</li>
                  <li className='project-li'>JavaScript</li>
                </ul>
              </div>
              <a href="https://quiz-app-with-timer-one.vercel.app/" className="btn btn-primary">Demo</a>
              <a href="https://github.com/krishnasai89/Quiz-App-with-Timer.git" className="btn btn-primary ml-3">Source Code</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card project-card">
            <div className="card-header">
              <img src="" alt="" className='card-img-top'/>
            </div>
            <div className="card-body project-card-body">
              <h5 className="card-title">Digital Clock</h5>
              <p className="card-text">Digital Clock with display in current time.</p>
              <div>
                <ul className='project-ul'>
                  <li className='project-li'>ReactJS</li>
                  <li className='project-li'>UseState</li>
                  <li className='project-li'>UseEffect</li>
                </ul>
              </div>
              <a href="https://digital-clock-in-react-js.vercel.app/" className="btn btn-primary">Demo</a>
              <a href="https://github.com/krishnasai89/Digital-Clock-in-React-js.git" className="btn btn-primary ml-3">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
