import React from 'react'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
// import Cloud1 from '../../assets/cloud2.png'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Passionate Work</span>
        <span className='skillDesc'>Innovative individual with proven success evaluating requirements for software development projects to design
innovative solutions. Out-of-the-box thinker and problem solver dedicated to improving performance. Works well in
teams and consistently delivers to deadlines.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDesign} alt='front-end' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AI/ML Enthusiast</h2>
                        <p>Exploring the world of Artificial Intelligence and Machine Learning with hands-on experience in Python, data modeling, and algorithm development. Passionate about building intelligent systems that solve real-world problems through innovation and data-driven solutions.</p>
                    </div>
                </div>
            </div>

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='back-end' className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>Back-End Developer</h2>
                    <p>Specialized in building robust and scalable server-side applications using Node.js. Focused on REST API development, user authentication, and optimizing performance to ensure smooth backend operations.</p>
                    </div>
                </div>
            </div>

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={AppDesign} alt='software-dev' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Software Developer</h2>
                        <p>Developing efficient, scalable, and maintainable software solutions across full-stack technologies.
                             Proficient in coding, debugging, and optimizing applications to solve real-world problems.</p>
                    </div>
                </div>
            </div>
        </section>
            // {/* /* <div className='skillBars'>
            //     <div className='skillBar'>
            //         <img src={Cloud1} alt='cloud-dev' className='skillBarImg'/>
            //         <div className='skillBarText'>
            //     <h2>Cloud Developer/DevOps</h2>
            //             <p>Designing secure, scalable, and high-availability cloud solutions using AWS, Kubernetes, Jenkins, and CI/CD pipelines. 
            //                 Passionate about cloud automation, infrastructure optimization, and DevOps best practices.
            //             </p>
            //         </div>
            //     </div>
            // </div> */ }
    
  )
}

export default Skills
