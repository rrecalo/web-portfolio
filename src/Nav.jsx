import React from 'react'
import { motion } from 'framer-motion'



const Nav = ({selected, setSelected}) => {

    function changeSelected(newValue){
        setSelected(newValue);
    }

  return (
    <div className='d-flex flex-row w-100 justify-content-center gap-5 text-primary'>
        <motion.button className='bg-transparent border-0' onClick={() => changeSelected("bio")}><motion.h2 
        animate={{color: selected==="bio" ? "#b6ec8d":  "#b1c5ad",}}>Bio</motion.h2></motion.button>


        <motion.button className='bg-transparent border-0' onClick={() => changeSelected("projects")}>
            <motion.h2 animate={{color: selected==="projects" ? "#b6ec8d":  "#b1c5ad",}}>Projects</motion.h2></motion.button>
        <motion.button className='bg-transparent border-0' onClick={() => changeSelected("experience")}>
            <motion.h2 animate={{color: selected==="experience" ? "#b6ec8d":  "#b1c5ad",}}>Experience</motion.h2></motion.button>
    </div>
  )
}

export default Nav