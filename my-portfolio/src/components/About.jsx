import React from 'react'
import "../Styles/about.css";
function About() {
  return (
    <div id="section1">
    <div className='aboutcontainer'>
                About Me
    </div>
     <div className='grid-container'>
        <div >
            <h2 className='skillhead'>A Little Bit About Me!</h2>
            <p className='pp'>

👋 Hey there! I'm Davinder, a recent Computer Science Engineering graduate with a passion for building impactful solutions. Throughout my academic journey, I've immersed myself in the world of web development, specializing in the MERN stack. My portfolio showcases several innovative projects where I've applied these skills to create seamless user experiences.
</p>
<p className='pp'>
⌨️ Beyond coding, I thrive on honing my competitive programming abilities, constantly challenging myself to solve complex problems efficiently. My goal is to leverage these skills in a dynamic team where I can contribute fresh ideas and drive meaningful results.
</p>
<p className='pp'>
🌟 Let's connect and explore how my enthusiasm for technology and problem-solving can bring value to your projects!
</p>
            
         </div> 
        <div>
            <h2 className='skillhead'>Skills</h2>
         <div className='skills'>
         <div>C++</div> 
         <div>C</div> 
         <div>JavaScript</div> 
         <div>React</div> 
         <div>Express</div> 
         <div>Node</div> 
         <div>MongoDb</div>  
         <div>SQL</div> 
         <div>DataStructures</div> 
         <div>Algorithms</div> 
         <div>Competitive Programming</div> 
      </div>
 </div> 

 </div>
         <div className='grid-container2'>
         <div >
          <h2>Education</h2>
          <div>
          <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-content">
          <h3>Guru Tegh Bahadur Institute Of Techology</h3>
          <p>Bachelors of Technology In Computer Science Engineering</p>
          <p>2020-2024</p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-content">
          <h3>S.S. Mota Singh School</h3>
          <p>High School</p>
        </div>
      </div>
    </div>
          </div>
   
   
         </div>
         <div>
            <h2>Achievements</h2>
            <div className='Achievements'>
            <p>🌟 600+ Questions solved on Leetcode with 1700+              rating(Top 10%)</p>
            <p>🌟 Pupil on Codeforces</p>
            <p>🌟 3 star on CodeChef</p>
            </div>
           
         </div>

         </div>
         </div>

    
  )
}

export default About