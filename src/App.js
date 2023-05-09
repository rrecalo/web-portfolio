import react, {useEffect, useState} from 'react'
import  "./scss/css/custom.css";
import Header from './Header';
import {motion, } from 'framer-motion'
import Projects from './Projects';
import Nav from './Nav';
import Bio from './Bio';
import Skills from './Skills';

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
  const [loaded, setLoaded] = useState(false);

  function navigate(newSelected){
      setSelected(newSelected);
  }

  //useEffect(()=>{console.log(selected)},[selected]);

  return (
    <div className="App w-100 bg-light d-flex flex-column col-12 justify-content-center">
      <div className='d-flex m-0 p-0 flex-column justify-content-center col-11 col-sm-10 col-md-11 col-lg-10 col-xl-9 col-xxl-8 align-self-center'>
        <Header />
        {/* <Nav setSelected={navigate} selected={selected} setLoaded={setLoaded}/> */}
        <Bio/>
      
      


      </div>
    </div>
  );
}

export default App;
