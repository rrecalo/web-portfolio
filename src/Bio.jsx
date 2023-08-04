import React, { useEffect, useState} from 'react'
import {motion, useAnimationControls, AnimatePresence} from 'framer-motion'
import AnimatedHeader from './AnimatedHeader';
import ProjectData from './ProjectData'
import ProjectCard from './ProjectCard'
import ImageCarousel from './ImageCarousel';

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

  const [expanded, isExpanded] = useState(false);
  const [projectToView, setProjectToView] = useState(ProjectData.find(p => p.info.title === "ecommerce-app"));
  const [images, setImages] = useState(ProjectData.find(p => p.info.title === "ecommerce-app").images);

  function openProjectView(projectToOpen){
      setImages(ProjectData.find(p => p.info.title === projectToOpen.info.title).images);
      setProjectToView(projectToOpen);
      isExpanded(true);
  }
  function closeProjectView(){
      isExpanded(false);
      setProjectToView({});
  }

  const animControls = useAnimationControls();

  useEffect(()=>{
    if(loaded){
      animControls.stop();
    }
    console.log(loaded);
  },[])

  useEffect(()=>{
    setImages(ProjectData.find(p => p.info.title === projectToView.info.title).images);
  }, [projectToView])

  return (
    <div id="biodiv" className="d-flex flex-column col-12 justify-content-center mt-3 mt-md-5" style={{marginTop:"0vh"}}>
    {/** header */}

      <div className='d-flex flex-column col-12 align-self-center text-left fs-3 fw-light'>

        <div className='d-flex flex-column col-md-9 col-12 align-self-center text-left'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className='d-flex flex-column justify-content-center col-6'>


          <div className="container p-0">
          {bioText.map((item, index)=>{
            return <AnimatedHeader {...item} key={index} animType={"custom"} customAnim={custom}/>;
            })}
          </div>
        </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={pContainer} className='d-flex flex-column col-md-9 col-12 align-self-center text-left '>
            <motion.p className='fs-6 mb-0 text-secondary' initial="initial" animate="visible" variants={pVariants}>
              B.S Information Technology graduate from Georgia Gwinnett College
            </motion.p>
            <motion.p className='fs-6 mb-4 text-secondary' initial="initial" animate="visible" variants={pVariants}>
              Experienced in front-end web development in an Agile work environment
            </motion.p>
            {/* <motion.p className='fs-6 mb-0' initial="initial" animate="visible" variants={pVariants}>
              I love finding innovative ways to implement complex software to solve problems and build useful applications
            </motion.p> */}
            {/* <motion.p className='fs-6 mb-0' initial="initial" animate="visible" variants={pVariants}>
              contact me at robertrecalo@icloud.com
            </motion.p> */}
        </motion.div>
      
      <motion.div key="projects" id="projectsdiv" className="d-flex flex-column col-12 align-items-center mt-md-5 mt-2" style={{}} exit={{opacity:0}}>
        <motion.div  initial="initial"
        animate="animate"
        //variants={projectContainer}
        className="projectcontainer d-flex flex-lg-row flex-column align-items-center justify-content-center gap-3">
        {ProjectData.map(project =>(<ProjectCard key={project.info.title} project={project} openProjectView={() => openProjectView(project)}/>))}
        </motion.div>
      </motion.div>
      
      <div className='d-flex flex-column col-md-9 col-12 align-self-center text-left '>
      <div className='col-12 mx-auto mt-5 text-primary'>
      {projectToView.info.title}
      </div>
      <div id="project_desc" className='col-12 mx-auto mt-1 text-secondary fs-6'>
        {projectToView.info.desc}
      </div>

      <div className='d-flex col-12 mx-auto mb-5 mt-3'>
        <ImageCarousel imageList={images} />
      </div>  
      </div>
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