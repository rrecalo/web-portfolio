import React, {useState} from 'react'
import {AnimatePresence, motion, } from 'framer-motion'
import Project from './Project'
import ProjectView from './ProjectView'

const projects=[
  {
    title: "visual-portfolio",
    subtitle: "A visual portfolio-building web-app",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis turpis mauris, eget efficitur velit blandit quis. Praesent non maximus risus."
  },
  {
    title: "sieger-breeding",
    subtitle: "A backyard dog-breeder business website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis turpis mauris, eget efficitur velit blandit quis. Praesent non maximus risus."
  },
]

const projectContainer = {
  initial:{x:"100%",},
  animate:{x:0,
    transition:{staggerChildren:0.025, duration:1}
  },
}

const Projects = () => {

  const [expanded, isExpanded] = useState(false);
  const [projectToView, setProjectToView] = useState("");

  function openProjectView(projectToOpen){
      setProjectToView(projectToOpen);
      isExpanded(true);
  }
  function closeProjectView(){
      isExpanded(false);
      setProjectToView("");
  }

  return (
    <AnimatePresence mode="wait">
    {!expanded ?

    <motion.div key="projects" id="projectsdiv" className="d-flex flex-column col-12 align-items-center gap-5 mt-5" style={{}} exit={{opacity:0}}>
      <motion.div  initial="initial"
    animate="animate"
    variants={projectContainer}
      className="projectcontainer d-flex flex-column col-11 align-items-center gap-5 ">
      {projects.map(project =>(<Project project={project} openProjectView={openProjectView}/>))}
      </motion.div>
    </motion.div>
    :
    <ProjectView key="projectsview" projectName={projectToView} closeView={closeProjectView}/>
    }
    </AnimatePresence>
  )
}

export default Projects