import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// Import images for slides
import slide1 from "../../../assets/images/slide1.webp"
import slide2 from "../../../assets/images/slide2.webp"
import slide3 from "../../../assets/images/slide3.webp"
import slide4 from "../../../assets/images/slide4.webp"
const Slider= () => {
  const listImages=[slide1,slide2,slide3,slide4]
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          listImages.map((item,index)=>(<SwiperSlide key={index}>
            <img src={item} alt="slide image" />
          </SwiperSlide>))
        } 
      </Swiper>
  );
};
export default Slider;