import React from 'react'
import ProjectData from './ProjectData'
import { motion } from 'framer-motion';
import { infoButton } from './ProjectCard';

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
        <div className='d-flex flex-row col-12 align-items-center ps-3 pt-2 mb-md-1 mb-2'>
            <div className='fs-md-2 fs-sm-3 fs-4 text-primary col-7'>
                {data.info.title} <span className='text-muted fs-7'>{data.info.subtitle}</span>
            </div>
            
            <div className='d-flex flex-row col-5 align-items-center  justify-content-end gap-4 pe-3 '>
                {/* <motion.a initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                    className="btn border-1 card-link fs-6 px-3"
                    href={data.gitLink} target="_blank">GitHub
                </motion.a> */}
                <div className='d-flex flex-row justify-content-start align-items-center ps-md-4 pb-2 pb-md-0 gap-md-3 gap-1'>
                    <a className={`${data.gitLink.enabled === true ? "": 'text-muted'}`}
                    href={data?.gitLink.link} target="_blank" rel="noreferrer" style={data.gitLink.enabled === false ? {pointerEvents : "none"} : {}}>
                        {data.gitLink.enabled === true ? 'View On GitHub' : 'Private Repo'} 
                    </a>

                    <a className={`${data.deployLink.enabled === true ? "": 'text-muted'}`}
                        href={data?.deployLink.link}
                        target="_blank" rel="noreferrer"
                        style={data.deployLink.enabled === false ? {pointerEvents : "none"} : {}}>
                        Live Deploy
                    </a>
                    <motion.button initial="initial" animate="animate" whileHover="whileHover" variants={infoButton} 
                        className="btn border-1 card-link fs-6 px-3"
                        onClick={closeView}>Close
                    </motion.button>
                </div>
        </div>
        </div>

        <div className='px-3 text-primary font-light'>
            {data.info.desc}
        </div>
        <div id="projectimagesdiv" className='d-flex flex-column align-items-center gap-3 text-primary mt-4 px-3'>
            {data.images.map(img =>(
                <img src={require('./images/'+img)} alt='project_image' className='col-6 rounded' />
            ))}
        </div>
        {/* <div  className='d-flex flex-row col-12 align-items-center ps-3 mt-0'>
            <div className='fs-md-6 fs-8 text-muted col-12'>
            {data.info.subtitle}
            </div>
        </div>
        <div className='d-flex flex-row col-12 px-md-3 px-sm-2 px-0 mt-1 align-self-center ps-3 ps-m-0'>
            <div id="textdesc" className='fs-6 text-primary col-8'>
                {data.summary.text}
            </div>        
            <div id="textdesc" className='d-flex flex-column col-6 align-items-start justify-content-center gap-2 px-2  mt-2 text-dark fs-md-6 fs-8'>
            {data.techs.map((tech) => (<span className=''>{tech}</span>))}
            </div>
        </div>
        <div id="projectviewdiv"  className='d-flex flex-column col-12 align-items-start px-2 mt-1'>
            
            <div id="projectimagesdiv" className='d-flex flex-column align-items-center gap-3 text-primary mt-4'>
            {data.images.map(img =>(
                <img src={require('./images/'+img)} alt='project_image' className='col-10 rounded' />
            ))}
            
            </div>
        </div> */}
       
    </div>
    </motion.div>
  )
}

export default ProjectView