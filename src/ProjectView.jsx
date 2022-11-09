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

    const data = ProjectData.find(project => project.info.title === projectName);

  return (
    <motion.div className="d-flex flex-column col-12 align-items-center gap-5 mt-5" initial="initial" animate="animate" exit="exit"
    variants={projectViewVariant}>
    {/**Info goes under this main div */}
    <div className='d-flex flex-column col-11 border border-dark projectview align-items-start rounded'> 
        <div className='d-flex flex-row col-12 align-items-center ps-3 pt-2'>
            <div className='fs-2 text-primary col-5'>
                {data.info.title}
            </div>
            <div className='d-flex flex-row col-7 align-items-center justify-content-center gap-4 pe-2'>
                <motion.a initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3"
                    href={data.gitLink} target="_blank">GitHub
                </motion.a>
                <motion.a initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3" style={data.deployLink == "" ? {pointerEvents: "none"} : ""}
                    href={data.deployLink} target="_blank">{data.deployLink == "" ? 'Not Deployed' : 'Deployment'}
                </motion.a>
                <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3"
                    onClick={closeView}>Return
                </motion.button>
               
            </div>
        </div>
        <div className='d-flex flex-row col-12 align-items-center ps-3 mt-0'>
            <div className='fs-6 text-muted col-8'>
            {data.info.subtitle}
            </div>

        </div>
        <div className='d-flex flex-row col-12 align-items-center ps-3 mt-4'>
            <div className='fs-4 text-primary col-12'>
            {data.summary.text}
            </div>
        </div>

    </div>
    </motion.div>
  )
}

export default ProjectView