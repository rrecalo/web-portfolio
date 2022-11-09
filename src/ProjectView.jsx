import React from 'react'
import ProjectData from './ProjectData'
import { motion } from 'framer-motion';
import { infoButton } from './Project';

const projectViewVariant ={
    initial:{
        y: "100%",
    },
    animate:{
        y:0,
        transition:{duration:0.75},
    },
    exit:{
        y:"-150%",
        transition:{duration:0.4},
    }
}

const ProjectView = ({projectName, closeView}) => {

    const data = ProjectData[projectName];

  return (
    <motion.div className="d-flex flex-column col-12 align-items-center gap-5 mt-5" initial="initial" animate="animate" exit="exit"
    variants={projectViewVariant}>
    <motion.div className='d-flex flex-row col-11 border border-dark projectview align-items-start rounded'
        > 
        <div className='d-flex flex-row col-12 align-items-center ps-3 pt-2'>
        <div className='fs-1 text-primary col-6'>
            {data.info.title}
        </div>
        <div className='d-flex flex-row col-6 align-items-center justify-content-center'>
        <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
            className="btn border-1 card-link fs-5 px-3"
            onClick={closeView}>Return
        </motion.button>
        </div>
        </div>
    </motion.div>
    </motion.div>
  )
}

export default ProjectView