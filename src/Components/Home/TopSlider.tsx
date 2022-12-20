import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const TopSlider = () => {
  return (
    <div className="z-0">
       <Swiper
        className="lg:h-[80vh] md:h-[90vh] sm:h-screen h-screen bg-cusRed"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className="relative flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            fill
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
          {/* <img src={} alt="" /> */}
          {/* <h2 className="absolute bottom-0">Hello</h2> */}
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1525272149490-82288cb110a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            fill
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center">
        <Image
            src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80"
            fill
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
