import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projectCard = {
    initial:{
        x:"-200%",
    },
    animate:{
        x: 0,
        transition:{duration:1},
    }
}
export const infoButton ={
    initial:{
        borderColor:"#b1c5ad", backgroundColor:"#1c1c1c",
        transition:{duration:0.01}
    },
    animate:{
        borderColor:"#b1c5ad", color:"#b1c5ad",
        transition:{duration:0.01}
    },
    whileHover:{
        borderColor:"#b6ec8d", color:"#1c1c1c", backgroundColor:"#b1c5ad",
        transition:{duration:0.01}
    }
}

const ProjectCard = ({project, openProjectView,...props}) => {

    function openProject(){
        openProjectView(project.info.title);
    }

  return (
    <motion.div id="project-card" className='col-lg-4 col-12'
    variants={projectCard}>
    <Card className='col-12 bg-light border-1 border-dark h-100'>
        <Card.Body>
            <div className='d-flex flex-column justify-content-between h-100 align-items-start'>
                <div className='d-flex flex-column justify-content-between align-items-start'>
                    <Card.Title className='fs-sm-2 fs-5 text-dark '>{project.info.title}</Card.Title>
                    <Card.Subtitle className="card-subtitle mb-md-2 mb-0 text-muted fs-md-6 fs-8">{project.info.subtitle}</Card.Subtitle>
                    
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center pb-2 pb-md-0 fs-6 w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <a className={`${project.gitLink.enabled === false ? "text-muted": ""}`} href={project.gitLink.link} target="_blank" rel="noreferrer" style={project.gitLink.enabled === false ? {pointerEvents : "none"} : {}}>GitHub</a>
                    <a className={`ps-4 ${project.deployLink.enabled === false ? "text-muted": ""}`} href={project.deployLink.link} target="_blank"rel="noreferrer" style={project.deployLink.enabled === false ? {pointerEvents : "none"} : {}} >Deploy</a>
                    </div>
                    <div className='d-flex justify-content-end col-6'>
                    <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} className="btn border-1 card-link fs-6"
                    onClick={openProject} disabled={!project.moreInfo.enabled}>More Info</motion.button>
                    </div>
                </div>
                
            </div>
            
        </Card.Body>
    </Card>
    </motion.div>
  )
}

export default ProjectCard