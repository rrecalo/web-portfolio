import React from 'react'
import { motion } from 'framer-motion'



const Nav = ({selected, setSelected, setLoaded}) => {

    function changeSelected(newValue){
        setSelected(newValue);
    }

  return (
    <div className='d-flex flex-row w-100 justify-content-center gap-5 text-primary'>
        <motion.button className='bg-transparent border-0' onClick={() => {changeSelected("bio"); setTimeout(setLoaded(true), 1000)}}><motion.h2 
        animate={{color: selected==="bio" ? "#b6ec8d":  "#b1c5ad",}}>About</motion.h2></motion.button>


        <motion.button className='bg-transparent border-0' onClick={() => changeSelected("projects")}>
            <motion.h2 animate={{color: selected==="projects" ? "#b6ec8d":  "#b1c5ad",}}>Projects</motion.h2></motion.button>
        {/* <motion.button className='bg-transparent border-0' onClick={() => changeSelected("skills")}>
            <motion.h2 animate={{color: selected==="skills" ? "#b6ec8d":  "#b1c5ad",}}>Skills</motion.h2></motion.button> */}
    </div>
  )
}

export default Nav