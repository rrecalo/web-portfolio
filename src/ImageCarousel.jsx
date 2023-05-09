import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const ImageCarousel = ({imageList, ...props}) => {

    const [currentIndex, setIndex] = useState(0);
    const [images, setImages] = useState(imageList);
    const intervalMS = 4000;

    const carouselScroll = () =>{
        if(currentIndex === images.length-1){
            return setIndex(0)
        }
        return setIndex(prev => prev+1);
    }

    const exitLeftAnim = {x:"-100%", opacity:0,
    transition:{duration:0.01 }}

    function nextSlide(){
        console.log("SLIDE");
        carouselScroll();
    }

    function prevSlide(){
        setImages(prev => prev.concat(prev.shift()))
        //animate("img", {})
        //setImages(prev => prev.concat(prev.shift()));
        // console.log(currentIndex);
        // if(currentIndex === 0){
        //     console.log("set to :",images.length-1);
        //     return setIndex(images.length-1);
        // }
        // console.log("set to 0");
        // return setIndex(0);
    }

    // useEffect(()=>{
        //images = images.push(images.shift());
        //if(images.length > 2){
        //setImages(prev => prev.concat(prev.shift()));
        //}
    // },[currentIndex])

    useEffect(()=>{
        //images = images.push(images.shift());
        setImages(imageList);
        setIndex(0);
    },[imageList])

    useEffect(() => {
        const interval = setInterval(() => {carouselScroll()}, intervalMS);
        return ()=> clearInterval(interval);
    });

  return (
    <>
    <button onClick={prevSlide} className='carousel-button eht'>
    <MdOutlineKeyboardArrowLeft />
    </button>
    <div className='project-carousel-container w-100'>
        <AnimatePresence mode='wait' >
        <motion.img
        // initial={{x:"1000%", opacity:1,
        // }}
        // animate={{x:0, opacity:1, transition:{duration:0.1}}}
        // exit={{x:"-300%", opacity:1,
        // transition:{duration:.4}}}
        animate={{opacity:1, transition:{duration:0.25}}}
        exit={{opacity:0, transition:{duration:0.25}}}
        className='project-carousel-item' src={require("./images/" + images[currentIndex])} alt="project images"
        key={currentIndex}/>
        </AnimatePresence>
    </div>
    <button onClick={nextSlide} className='carousel-button eht'><MdOutlineKeyboardArrowRight/></button>
    </>
  )
}

export default ImageCarousel