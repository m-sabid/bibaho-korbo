import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const TopSlider = () => {
  return (
    <div className="z-0">
       <Swiper
        className="lg:h-[90vh] md:h-[90vh] sm:h-screen h-screen bg-cusRed"
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
            src="https://img.freepik.com/free-photo/young-couple-together-walking-autumn-park_1303-26181.jpg?w=2000"
            width={1200}
            height={1000}
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
          {/* <img src={} alt="" /> */}
          {/* <h2 className="absolute bottom-0">Hello</h2> */}
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center">
          <Image
            src="https://media.istockphoto.com/id/1319039993/photo/young-loving-muslim-couple-holding-paper-house-and-smiling.jpg?s=612x612&w=0&k=20&c=anvo1H7NSUPreRYQ-U2VP6H6owoPydfJGHOhjOPjAzY="
            width={1200}
            height={1000}
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex justify-center">
        <Image
            src="https://cdn.pixabay.com/photo/2022/07/30/11/47/wedding-7353626__340.jpg"
            width={1920}
            height={1280}
            alt="pic"
            className="object-cover w-screen h-screen absolute top-0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
