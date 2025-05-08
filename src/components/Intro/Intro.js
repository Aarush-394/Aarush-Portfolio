import React from 'react'
import './intro.css'
import bg from '../../assets/my-pic.png'
//import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import resImg from '../../assets/res.png'
const Intro = () => {
  return (
    <section id='intro'>
          <div className='introContent'>
              <span className='hello'>Hello,</span>
              <span className='introText'>
                  I'm <span className='introName'>Aarush Raj Gandhari</span><br/>
            AIML Enthusiast</span>
        <p className='introPara'>I'm a passionate Developer with strong proficiency in AI and Machine Learning<br/> technologies and 
            profound interest in Full Stack Web Development,<br/> aiming to build and design highly scalable solutions</p>
            <div className="introButtons">
  <a href="mailto:aarushrajg@gmail.com">
    <button className="btn">
      <img src={btnImg} alt="hire me" className="btnImg" />Get in touch
    </button>
  </a>

  <a href="/resume.pdf" download>
  <button className="btn">
    <img src={resImg} alt="resume" className="btnImg" />
    <span style={{ fontSize: '1.0rem', fontWeight: 'bold', color: 'black' }}>Resume</span>
  </button>
</a>
</div>

      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
