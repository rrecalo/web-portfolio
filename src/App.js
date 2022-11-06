import react, {useRef} from 'react'
import  "./scss/css/custom.css";
import Navbar from './Navbar';
import {motion, useInView} from 'framer-motion'
import { useScroll } from "framer-motion";

const headerVariants ={
  outView:{
    scale:0.5,
  },
  inView:{
    scale:1,
    transition:{duration:0.5,},
  }
}



function App() {

  //const [] = useScroll();
  const refs = {
    bio: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    
  }
  const inView = {
    bio: useInView(refs.bio),
    projects: useInView(refs.projects),
    skills: useInView(refs.skills),
  }

  return (
    <div className="App w-100 bg-light">
      <div className='d-flex m-0 p-0 flex-column justify-content-center col-12' style={{paddingTop:"70px !important"}}>
        <Navbar />
      {/** Bio section */}
      <div id="biodiv" className="d-flex flex-column col-12 justify-content-center" style={{marginTop:"8vh", paddingBottom:"40vh"}}>
      {/** header */}
        <motion.h1 layout ref={refs.bio} className=' blockheader align-self-center'
        variants={headerVariants} animate={inView.bio ? "inView": "outView"}>
          bio
        </motion.h1>
        <div className='d-flex flex-column w-75 align-self-center text-left mt-5 fs-3 px-0 px-md-5 fw-light'>
          <p>
            I'm Robert - avid software developer and student -<br/><br/>
            with <b>four years</b> of programming under my belt, I've dipped my feet across the whole spectrum of software
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
        </div>
      </div>

      {/** Project section */}
      <div id="projectsdiv" className="d-flex flex-column col-12 justify-content-center" style={{}}>
        {/** header */}
        <motion.h1 ref={refs.projects} className=' blockheader align-self-center'
        variants={headerVariants} animate={inView.projects ? "inView": "outView"}>
          projects
        </motion.h1>
      </div>

      {/** Skills section*/}
      <div className="d-flex flex-column col-12 justify-content-center" style={{marginTop:"100vh"}}>
        {/** header */}
        <motion.h1 ref={refs.skills} className=' blockheader align-self-center'
        variants={headerVariants} animate={inView.skills ? "inView": "outView"}>
          skills
        </motion.h1>
      </div>


      </div>
    </div>
  );
}

export default App;
