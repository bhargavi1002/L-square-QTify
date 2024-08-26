// import React, { useState, useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/navigation';
// import { Box } from '@mui/system';
// import LeftArrow from '../LeftArrow/LeftArrow';
// import RightArrow from '../RightArrow/RightArrow';
// import styles from "./Carousel.module.css";

// const Carousel = ({ items, navigationPrevId, navigationNextId }) => {
//     const [isEnd, setIsEnd] = useState(false);
//     const [isBeginning, setIsBeginning] = useState(true);
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);

//     useEffect(() => {
//       const swiperEl = document.querySelector('.swiper');
//       if (swiperEl && swiperEl.swiper) {
//           swiperEl.swiper.navigation.init(); 
//           swiperEl.swiper.navigation.update(); 
//       }
//     }, [prevRef, nextRef]);

  
//     const handleSwiper = (swiper) => {
//       setIsBeginning(swiper.isBeginning);
//       setIsEnd(swiper.isEnd);
//     };
  
//     return (
//       <Box sx={{ position: 'relative', marginTop: 1, marginLeft: 4 }}>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={'auto'}
//           onSwiper={handleSwiper}
//           onSlideChange={handleSwiper}
//           navigation={{
//             prevEl: prevRef.current,
//             nextEl: nextRef.current,
//           }}
//           breakpoints={{
//             540: {
//               slidesPerView: 3,
//               spaceBetween: 2,
//             },
//             768: {
//               slidesPerView: 5,
//               spaceBetween: 3,
//             },
//             1024: {
//               slidesPerView: 7,
//               spaceBetween: 4,
//             },
//           }}
//         >
//           {items.map((item, index) => (
//             <SwiperSlide key={index}>{item}</SwiperSlide>
//           ))}
//         </Swiper>
//         <LeftArrow
//           ref={prevRef}
//           style={{
//             display: isBeginning ? 'none' : 'block',
//           }}
//         />
//         <RightArrow
//           ref={nextRef}
//           style={{
//             display: isEnd ? 'none' : 'block',
//           }}
//         />
//       </Box>
//     );
// };

// export default Carousel;


import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Box } from '@mui/system';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';
import styles from "./Carousel.module.css";

const Carousel = ({ items}) => {
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
      const swiperEl = document.querySelector('.swiper');
      if (swiperEl && swiperEl.swiper) {
          swiperEl.swiper.navigation.init(); 
          swiperEl.swiper.navigation.update(); 
      }
    }, [prevRef, nextRef]);

  
    const handleSwiper = (swiper) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
  
    return (
      <Box sx={{ position: 'relative', marginTop: 1, marginLeft: 4 }}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          onSwiper={handleSwiper}
          onSlideChange={handleSwiper}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            540: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 3,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 4,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
        <LeftArrow
          ref={prevRef}
          style={{
            display: isBeginning ? 'none' : 'block',
          }}
        />
        <RightArrow
          ref={nextRef}
          style={{
            display: isEnd ? 'none' : 'block',
          }}
        />
      </Box>
    );
};

export default Carousel;