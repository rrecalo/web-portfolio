import React, { useEffect } from 'react'
import {motion, useAnimationControls, } from 'framer-motion'
import AnimatedHeader from './AnimatedHeader';

const bioText = [
  { type: "heading3", text: "Hi, I'm Robert" },
];

const container = {
  hidden:{
    x:"25%",
  },
  visible: {
    x: "0",
    transition: {
      staggerChildren: 0.05,
      when: "afterChildren",
      duration:1,
    }
  }
};

const pContainer = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const pVariants={
  initial:{opacity:0},
  visible:{opacity:1, transition:{duration:1, delay:2.25}}
}



const custom = {
  hidden: {
    opacity:0,
    color: "#b1c5ad",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
  },
  visible: {
    opacity:1,
    color: "#b6ec8d",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75, }
  }
};

const Bio = ({loaded, ...props}) => {

  const animControls = useAnimationControls();

  useEffect(()=>{
    if(loaded){
      animControls.stop();
    }
    console.log(loaded);
  },[])

  return (
    <div id="biodiv" className="d-flex flex-column col-12 justify-content-center mt-3 mt-md-5" style={{marginTop:"0vh"}}>
    {/** header */}

      <div className='d-flex flex-column col-11 align-self-center text-left fs-3 fw-light'>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className='d-flex flex-column justify-content-center'>


          <div className="container p-0">
         {bioText.map((item, index)=>{
          return <AnimatedHeader {...item} key={index} animType={"custom"} customAnim={custom}/>;
          })}
        </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={pContainer}>
            <motion.p className='fs-6 mb-0' initial="initial" animate="visible" variants={pVariants}>
              Information Technology student at Georgia Gwinnett College
            </motion.p>
            <motion.p className='fs-6 mb-5' initial="initial" animate="visible" variants={pVariants}>
              Experienced in front-end web development using ReactJS
            </motion.p>
            <motion.p className='fs-2 mb-4' initial="initial" animate="visible" variants={pVariants}>
              I love finding innovative ways to implement complex software to solve problems and build useful applications
            </motion.p>
            <motion.p className='fs-2 mb-0' initial="initial" animate="visible" variants={pVariants}>
              I'm open to work - contact me at robertrecalo@icloud.com
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