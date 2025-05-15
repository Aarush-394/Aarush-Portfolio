import React, { useState } from 'react'
import './work.css'
// import Portfolio1 from '../../assets/portfolio-1.png'
// import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
// import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
const Work = () => {

  // const [flippedCard, setFlippedCard] = useState(null);

  // const experienceData = [
    
  // ];

  const [flippedProject, setFlippedProject] = useState(null);

const projectData = [
  {
    img: Portfolio3,
    title: 'Credit Card Fraud Detection',
    description: 'A machine learning project focused on identifying fraudulent credit card transactions using logistic regression. It analyzes transaction patterns and classifies them as legitimate or fraudulent to enhance financial security.',
    link: 'https://github.com/G-Aarush-Raj/Credit-Card-Fraud-Detection'
  },
  {
    img: Portfolio5,
    title: 'Manhole Detection and Monitoring System',
    description: 'The solution for missing and broken manhole covers, partial and improper coverage, difficulty in locating the blockages during rains pours are few of the major reasons causing road accidents and in many cases fatalities.',
    link: 'https://github.com/G-Aarush-Raj/Manhole-Detection-and-Monitoring-System'
  },
  {
    img: Portfolio6,
    title: 'Weather App',
    description: 'Developed a dynamic Weather App using Node.js and Express.js with a well-structured folder setup. Integrated real-time weather data from the OpenWeatherMap API to display accurate, location-based forecasts.',
    link: 'https://weather-2-6hst.onrender.com/'
  }
];

  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDesc'>To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills 
            and a responsible career opportunity to fully utilize my experience and skills, while making a significant 
            contribution to the success of the company.</span><br/>
            {/* <h3 className='experience'>Experience</h3> */}
            {/* <div className='workImgs'>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`flipCard ${flippedCard === index ? 'flipped' : ''}`}
            onClick={() => setFlippedCard(flippedCard === index ? null : index)}
          >
            <div className="flipCardInner">
              <div className="flipCardFront">
                <img src={exp.img} alt='' className='workImg' />
              </div>
              <div className="flipCardBack">
                <h4>{exp.title}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

            <h3 className='projects'>Projects</h3>

            <div className='workImgs'>
            {projectData.map((proj, index) => (
    <div
      key={index}
      className={`flipCard ${flippedProject === index ? 'flipped' : ''}`}
      onClick={() => setFlippedProject(flippedProject === index ? null : index)}
    >
      <div className="flipCardInner">
        <div className="flipCardFront">
          <img src={proj.img} alt='' className='workImg' />
        </div>
        <div className="flipCardBack">
          <h4>{proj.title}</h4>
          <p>{proj.description}</p>
          <a href={proj.link} target='_blank' rel='noopener noreferrer'>View Project</a>
        </div>
      </div>
    </div>
  ))}   
             
            </div>
            <button className='workBtn'>See More</button>
    </section>
  );
}

export default Work
