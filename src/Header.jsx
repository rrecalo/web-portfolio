import React from 'react'
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div className='navbar w-100 align-self-center justify-content-center bg-light border-bottom '
    initial={{y:10, opacity:0,}}
    animate={{y:0, opacity:1,}}>
        {/**Name */}
        <div className='d-flex flex-row col-11'> 
            <div className='col-9 col-md-10'>
            <div id="namediv" className='nameheader text-primary display-5 fw-bold'>
                <span id="name">Robert Recalo</span>
                <p id='devtag' className='d-flex flex-column flex-md-row text-dark fs-4 m-0 p-0 rht'>
                  <span>Software, Web developer</span>
                  {/* <span id='studenttag' className='align-self-md-center fs-6'>&nbsp;&nbsp;Student at Georgia Gwinnett College</span> */}
                </p>
            </div>
            </div>

        {/*Social icons 
          whileHover={{boxShadow: "10px 10px 5px $primary", color:"black",}}
        */}
            <div className='d-flex flex-row gap-3 align-self-center col-2'>
          <motion.div className='rounded border-0 social_icon'
          whileHover={{y:-3, scale:1.1}}>
            <a href='https://github.com/rrecalo' target="_blank" rel="noreferrer">
              <FaGithubSquare className='display-4 rounded social'/>
            </a>
          </motion.div>
          <motion.div className='rounded social_icon'
          whileHover={{y:-3, scale:1.1}}>
            <a href="https://www.linkedin.com/in/robertrecalo/" target="_blank" rel="noreferrer">
              <FaLinkedin className='display-4 rounded social'/>
            </a>
          </motion.div>
            </div>
            </div>
      </motion.div>
  )
}

export default Navbar