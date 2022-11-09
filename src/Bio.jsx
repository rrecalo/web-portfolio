import React from 'react'
import {motion, } from 'framer-motion'
import AnimatedHeader from './AnimatedHeader';

const bioText = [
  { type: "heading3", text: "I'm Robert" },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const Bio = () => {
  return (
    <div id="biodiv" className="d-flex flex-column col-12 justify-content-center" style={{marginTop:"0vh"}}>
    {/** header */}

      <div className='d-flex flex-column w-100 align-self-center text-left mt-5 fs-3 px-0 px-md-5 fw-light'>

        <motion.div
          initial="hidden"
          // animate="visible"
          animate="visible"
          variants={container}
          className='d-flex flex-column justify-content-center'>


          <div className="container p-0">
         {bioText.map((item, index)=>{
          return <AnimatedHeader {...item} key={index} animType={"opacity"} />;
          })}
        </div>
        <motion.p initial={{opacity:0}}animate={{opacity:1, transition:{duration:1, delay:1.5}}}>
        After discovering my passion for programming, I've been on a long road that has led me here.
        </motion.p>
        <motion.p initial={{opacity:0}}animate={{opacity:1, transition:{duration:1, delay:3.5}}}>
        Beginning with an AP Computer Science class in Highschool, I started with Java.
        </motion.p>
        <motion.p initial={{opacity:0}}animate={{opacity:1, transition:{duration:1, delay:5.5}}}>
        Many languages, years and side-projects later, I found interest in <span className='eht'>Web Development</span>
        </motion.p>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Bio


/*

<p>
With <b>four years</b> of programming under my belt, I've dipped my feet across the whole spectrum of software
<br/>
<br/>
beginning with Java in a High School AP Comp Sci class, I discovered my passion for<br/> 
<span className=''><b>Designing, 
Engineering, and Implementing</b></span><br/><i>all</i> kinds of Software.
<br/>
<br/>
since then, I caught interest in <b>Web Development</b> -- gaining experience with the <span className='eht'>MERN stack</span>, both <span className='eht'>SQL and No-SQL databases</span>, 
and plenty of practice with <span className='eht'>RESTful Web-API</span>
</p>

*/