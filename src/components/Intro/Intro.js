import React from 'react';
import './intro.css';
import bg from '../../assets/my-pic.png';
import btnImg from '../../assets/hireme.png';
import resImg from '../../assets/res.png';

const name = 'Aarush Raj Gandhari';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I am{' '}
          <span className="introName">
            {name.split('').map((char, index) => (
              <span key={index} style={{ '--i': index + 1 }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <br />
          AIML Enthusiast
        </span>
        <p className="introPara">
          I'm a passionate Developer with strong proficiency in AI and Machine Learning
          <br />
          technologies and profound interest in Full Stack Web Development,
          <br />
          aiming to build and design highly scalable solutions
        </p>
        <div className="introButtons">
          <a href="mailto:aarushrajg@gmail.com">
            <button className="btn">
              <img src={btnImg} alt="hire me" className="btnImg" />
              Get in touch
            </button>
          </a>

          <a href="/resume2.pdf" download>
            <button className="btn">
              <img src={resImg} alt="resume" className="btnImg" />
              <span className="resumeText">Resume</span>
            </button>
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
