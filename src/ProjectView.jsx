import React from 'react'
import ProjectData from './ProjectData'
import { motion } from 'framer-motion';
import { infoButton } from './Project';
import vphome from './images/vphome.png';

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
    <motion.div id="projectview" className="d-flex flex-column col-12 align-items-center gap-5 mt-2" initial="initial" animate="animate" exit="exit"
    variants={projectViewVariant}>
    {/**Info goes under this main div */}
    <div id="projectviewcard" className='d-flex flex-column col-11 border border-dark projectview align-items-start rounded'> 
        <div className='d-flex flex-row col-12 align-items-center ps-3 pt-2'>
            <div className='fs-2 text-primary col-7'>
                {data.info.title}
            </div>
            
            <div className='d-flex flex-row col-5 align-items-center justify-content-end gap-4 pe-3 '>
                {/* <motion.a initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3"
                    href={data.gitLink} target="_blank">GitHub
                </motion.a> */}
                {/* <motion.a initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3" style={data.deployLink == "" ? {pointerEvents: "none"} : ""}
                    href={data.deployLink} target="_blank">{data.deployLink == "" ? 'Not Deployed' : 'Deployment'}
                </motion.a> */}
                <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3"
                    onClick={closeView}>Close
                </motion.button>
               
            </div>
        </div>
        <div  className='d-flex flex-row col-12 align-items-center ps-3 mt-0'>
            <div className='fs-6 text-muted col-8'>
            {data.info.subtitle}
            </div>
        </div>
        <div className='d-flex flex-row col-11 px-md-3 px-sm-2 px-0 mt-1 align-self-center'>
            <div id="textdesc" className='fs-6 text-primary col-8'>
                {data.summary.text}
            </div>        
            <div id="textdesc" className='d-flex flex-column col-6 align-items-start justify-content-center gap-2 px-2  mt-2 text-dark fs-6'>
            {data.techs.map((tech) => (<span className=''>{tech}</span>))}
            </div>
        </div>
        <div id="projectviewdiv"  className='d-flex flex-column col-12 align-items-start ps-3 pe-3 mt-1'>
            
            <div  className='d-flex flex-column align-items-center gap-3 text-primary mt-4 px-2'>
            {data.images.map(img =>(
                <img src={require('./images/'+img)} alt='project_image' className='col-8 rounded' />
            ))}
            
            </div>
        </div>
       
    </div>
    </motion.div>
  )
}

export default ProjectView