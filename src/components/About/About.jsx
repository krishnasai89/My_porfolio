import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import fullstack_img from '../../assets/fullstack.png'


const About = () => {
  return (
    <div className='About' id='About'>
      <div className="container">
        <h4>Introduction</h4>
        <h1>Overview</h1>
        <p className='About-info'>I'm a passionate Computer Software Engineering graduate with a focus on front-end development. With a strong foundation in HTML, CSS, and JavaScript, I thrive on creating visually appealing and user-friendly interfaces that enhance the digital experience.I am excited href leverage my skills href contribute href innovative projects and collaborate with like-minded professionals. Currently, I am actively seeking a dynamic role where I can apply my technical skills and creativity href drive growth within an organization.</p>
        <button className='btn btn-info button' type='button'><a href="../assets/VELLAMPALLI KRISHNA SAI.pdf.pdf" download={'VELLAMPALLI KRISHNA SAI.pdf.pdf'}>Download Resume
            <FontAwesomeIcon icon={faDownload} className='svg'/>
        </a></button>
        <div className='space'></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card About-cards">
                <div className="card-header About-card-header">
                  <img src={fullstack_img} alt="" className='card-img-top'/>
                </div>
              <div className="card-body About-card-body">
                <h5 className="card-titles About-card-titles">Web Developer</h5>
              </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card About-cards">
                <div className="card-header About-card-header">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" class="css-xtbb2s card-img-top"/>
                </div>
              <div className="card-body About-card-body">
                <h5 className="card-titles About-card-titles">Python Developer</h5>
              </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="card About-cards">
                <div className="card-header About-card-header-1">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="css-xtbb2s card-img-top js"/>
                </div>
              <div className="card-body About-card-body">
                <h5 className="card-titles About-card-titles">JS Developer</h5>
              </div>
            </div>
            </div>
          </div>
          <div className="skill row">
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" class="css-xtbb2s" />
              <p>HTML</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" class="css-xtbb2s" />
              <p>CSS</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" class="css-xtbb2s"/>
              <p>Java Script</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" class="css-xtbb2s"/>
              <p>Bootstrap</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="ReactJS" class="css-xtbb2s"/>
              <p>ReactJS</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" class="css-xtbb2s"/>
              <p>Python</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" class="css-xtbb2s"/>
              <p>MySQL</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="css-xtbb2s"/>
              <p>MongoDB</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" class="css-xtbb2s"/>
              <p>Java</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" class="css-xtbb2s"/>
              <p>C</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" class="css-xtbb2s"/>
              <p>VS Code</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" class="css-xtbb2s"/>
              <p>Git</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg" alt="postmanapi" class="css-xtbb2s"/>
              <p>Postman</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="dj" class="css-xtbb2s Django"/>
              <p>Django</p>
            </div>
            <div className="skills">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" class="css-xtbb2s"/>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About