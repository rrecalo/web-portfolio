import react, {useEffect, useState} from 'react'
import  "./scss/css/custom.css";
import Header from './Header';
import {motion, } from 'framer-motion'
import Projects from './Projects';
import Nav from './Nav';
import Bio from './Bio';
import Experience from './Experience';

const headerVariants ={
  outView:{
    scale:0.5,
  },
  inView:{
    scale:1,
    transition:{duration:0.5,},
  }
}




function App() {

  const [selected, setSelected] = useState("bio");

  function navigate(newSelected){
      setSelected(newSelected);
  }

  //useEffect(()=>{console.log(selected)},[selected]);

  return (
    <div className="App w-100 bg-light d-flex flex-column col-12 justify-content-center">
      <div className='d-flex m-0 p-0 flex-column justify-content-center col-11 col-sm-9 col-md-9 col-lg-6 align-self-center'>
        <Header />
        <Nav setSelected={navigate} selected={selected}/>
        {selected === "bio" ? <Bio /> : selected === "projects" ? <Projects /> : selected === "skills" ? <Experience /> : <></>}

      
      


      </div>
    </div>
  );
}

export default App;
