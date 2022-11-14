import React from 'react'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

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
            <Card.Title className='fs-2 text-dark'>{project.info.title}</Card.Title>
            <Card.Subtitle className="card-subtitle mb-2 text-muted fs-6">{project.info.subtitle}</Card.Subtitle>
            <p className="card-text fs-6">{project.info.desc}</p>
            <div className='d-flex flex-row col-12 justify-content-between'>
            <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} className="btn border-1 card-link fs-5"
            onClick={openProject}>More Info</motion.button>
            <div className='d-flex flex-row gap-3 align-items-center'>
                {project.techs.map((skill)=>(<p className='m-auto align-self-center fs-6 rht'>{skill}</p>))}
            </div>
            </div>
        </Card.Body>
    </Card>
    </motion.div>
  )
}

export default Project