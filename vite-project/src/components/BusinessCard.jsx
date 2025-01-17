import React from 'react'
import BusinessProfile from '../images/business.png'
import emailLogo from '../images/email.png'
import linkedLogo from '../images/social.png'
import githubLogo from '../images/github.png'

const BusinessCard = () => {
  return (
    <div className='card-container'>
      <img src={BusinessProfile} alt="profile" />
        <div className='container'>
            <h1>Dasaradha RamiReddy</h1>
            <p>Full Stack Developer</p>
            <h6>DasaradhaRamiReddy.website</h6>
        </div>
              <div className="button">
                <a href="mailto:ramireddy1903@gmail.com" className="email-link">Email</a>
              </div>

        <div className='about'>
          <h4>About</h4>
          <p>I am a versatile Full Stack Developer with expertise in crafting dynamic and responsive web applications. With a passion for problem-solving and innovation, I bring creative ideas to life by seamlessly integrating front-end and back-end technologies.</p>
          <h4>Interest</h4>
          <p>I enjoy creating dynamic, full-stack applications that combine engaging front-end designs with robust back-end functionality. My passion lies in solving complex problems and leveraging technologies like React.js and Node.js to build scalable, user-focused solutions.</p>
        </div>


        <footer>
          <div className="social-links">
            <a href="https://github.com/Nani1921" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/dasaradha-rami-reddy/" target="_blank" rel="noopener noreferrer">
              <img src={linkedLogo} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="mailto:ramireddy1903@gmail.com">
              <img src={emailLogo} alt="Email" className="social-icon" />
            </a>
          </div>
        </footer>


      
    </div>
  )
}

export default BusinessCard
