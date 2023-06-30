import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/pagination";

const ImageCarousel = ({imageList, ...props}) => {



    function renderSlides(){
        return imageList.map(image=>{
            return <SwiperSlide key={image} 
            //style={{backgroundImage=require('./images/' +image)}}
            style={{ backgroundImage: `url(${require('./images/' +image)})` }}
            >
                <div className='slide_div' style={{ backgroundImage: `url(${require('./images/' +image)})` }}/>
                    {/* <img src={require('./images/' +image)} alt="project demo" className='project-carouel-item'/> */}
                </SwiperSlide>
            })
    }

  return (
    <>
    {/* <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper" keyboard={true} pagination={true} */}
        <Swiper navigation={true} modules={[Navigation, Pagination, Keyboard]} className="mySwiper" keyboard={true} pagination={true} spaceBetween={30} slidesPerView={1}>
        {renderSlides()}
      </Swiper>
    </>
  )
}

export default ImageCarousel