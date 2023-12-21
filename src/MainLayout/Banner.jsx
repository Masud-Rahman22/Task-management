
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import animation1 from '../../public/banner/animation1.json'
import animation2 from '../../public/banner/animation2.json'
import animation3 from '../../public/banner/animation3.json'
import animation4 from '../../public/banner/animation4.json'
import animation5 from '../../public/banner/animation5.json'
import animation6 from '../../public/banner/animation6.json'
// Import Swiperstyle
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Banner.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true} // Enable looping
                autoplay={{
                    delay: 3000, // Set autoplay delay in milliseconds (e.g., 3000 for 3 seconds)
                    disableOnInteraction: false // Continue autoplay even when user interacts with the slider
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Lottie className='w-[500px] h-[500px]' animationData={animation2}></Lottie>
                </SwiperSlide>
                <SwiperSlide>
                    <Lottie className='w-[500px] h-[500px]' animationData={animation3}></Lottie>
                </SwiperSlide>
                <SwiperSlide>
                    <Lottie className='w-[500px] h-[500px]' animationData={animation5}></Lottie>
                </SwiperSlide>
                <SwiperSlide>
                    <Lottie className='w-[500px] h-[500px]' animationData={animation6}></Lottie>
                </SwiperSlide>
                <SwiperSlide>
                    <Lottie className='w-[500px] h-[500px]' animationData={animation4}></Lottie>
                </SwiperSlide>
                <SwiperSlide>
                    <Lottie className='w-[500px] h-[500px]' animationData={animation1}></Lottie>
                </SwiperSlide>
            </Swiper>
            <Link to='login'><div className='text-center'>
            <button className=" py-3 bg-gradient-to-r from-blue-400 to-blue-700 font-bold text-xl rounded-md shadow-md hover:from-blue-600 hover:to-blue-900 transition-all duration-300 text-black uppercase md:w-96 mt-10">Let's Explore</button>
            </div></Link>
        </div>
    );
};

export default Banner;