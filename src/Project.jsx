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
        openProjectView(project.title);
    }

  return (
    <motion.div
    variants={projectCard}>
    <Card className='col-12 bg-light border-1 border-dark'>
        <Card.Body >
            <Card.Title className='fs-2 text-dark'>{project.title}</Card.Title>
            <Card.Subtitle className="card-subtitle mb-2 text-muted fs-6">{project.subtitle}</Card.Subtitle>
            <p className="card-text fs-6">{project.desc}</p>
            <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} className="btn border-1 card-link fs-5"
            onClick={openProject}>More Info</motion.button>
        </Card.Body>
    </Card>
    </motion.div>
  )
}

export default Project