import React from 'react'
import './about.css'
const About = () => {
  return (
    <section id='about'>
         <div className='skillBars'>
                <div className='skillBar'>
                    <div className='skillBarText'>
                        <h2>About Me</h2><br/>
                        <p>I’m Aarush Raj Gandhari, a Bachelor’s student in Artificial Intelligence and Machine Learning at Geethanjali College of Engineering & Technology. 
                            My journey in tech began with an innate curiosity to transform complex problems into simple, impactful solutions. 
                            Over time, I’ve honed skills in AI, Machine Learning, front-end and back-end development, cloud computing, and database management, enabling me to design responsive
                             and user-friendly applications. I’m always eager to innovate and learn. Looking ahead, I aspire to contribute to a company, 
leveraging my technical expertise and problem-solving acumen to drive impactful results.
Let’s connect and explore opportunities to collaborate or share ideas. 
I’d love to hear your thoughts on the evolving tech landscape or discuss how my skills align with your vision!
</p>
                    </div>
                </div>  
            
    <br/>
        
            <div className='skillBar'>
                  <div className='skillBarText'>
                  <h2>Technology Stack</h2><br/>
                 <div className='techGrid'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>MySQL</span>
                    <span>GitHub</span>
                    <span>AWS</span>
                 </div>
                  </div>
                </div>
        </div>       
    </section>
  )
}

export default About
