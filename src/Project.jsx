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

const Project = ({project, openProjectView,...props}) => {

    function openProject(){
        openProjectView(project.info.title);
    }

  return (
    <motion.div className='col-12'
    variants={projectCard}>
    <Card className='col-12 bg-light border-1 border-dark'>
        <Card.Body>
            <div className='d-flex flex-md-row flex-column justify-content-start align-items-start align-items-md-center mb-0 mb-md-2'>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                <Card.Title className='fs-sm-2 fs-5 text-dark '>{project.info.title}</Card.Title>
                </div>
                <div className='d-flex flex-row justify-content-start align-items-start ps-md-4 pb-2 pb-md-0'>
                    <a className={`${project.gitLink.enabled === false ? "text-muted": ""}`} href={project.gitLink.link} target="_blank" rel="noreferrer" style={project.gitLink.enabled === false ? {pointerEvents : "none"} : {}}>
                        {project.gitLink.enabled ? <>GitHub</> : <>Private</>}</a>
                    <a className={`ps-4 ${project.deployLink.enabled === false ? "text-muted": ""}`} href={project.deployLink.link} target="_blank"rel="noreferrer" style={project.deployLink.enabled === false ? {pointerEvents : "none"} : {}} >Deploy</a>
                </div>
            </div>
            <Card.Subtitle className="card-subtitle mb-md-2 mb-0 text-muted fs-md-6 fs-8">{project.info.subtitle}</Card.Subtitle>
            <p className="card-text fs-md-6 fs-7">{project.info.desc}</p>
            <div className='d-flex flex-column-reverse flex-md-row col-12 justify-content-between gap-2'>
            <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} className="btn border-1 card-link fs-5"
            onClick={openProject} disabled={!project.moreInfo.enabled}>{project.moreInfo.enabled ? <>More Info</> : <>Not quite ready</>}</motion.button>
            <div className='d-flex flex-row gap-3 align-items-center'>
                {project.techs.map((skill)=>(<p className='m-auto align-self-center fs-md-6 fs-7 rht'>{skill}</p>))}
            </div>
            </div>
        </Card.Body>
    </Card>
    </motion.div>
  )
}

export default Project