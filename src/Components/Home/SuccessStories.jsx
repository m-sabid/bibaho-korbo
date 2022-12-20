import Image from "next/image";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const SuccessStories = () => {
  const data = [
    {
      couple: "Ahmed & Mim",
      img: "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description:
        "It was a long journey to finding my life partner. Finally I thank bdmarriage to helping me to find my soulmate.",
    },
    {
      couple: "Kawsar & Saba",
      img: "https://images.unsplash.com/photo-1522433515676-e82aff21f9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=418&q=80",
      description:
        "We are thankful to bibaho-korbo .com for helping us to find each other. I was exiciting about the platform and its worked.",
    },
    {
      couple: "Adeeb & Munni",
      img: "https://images.unsplash.com/photo-1480631798479-b2343c556630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      description:
        "We went from strangers to become a married couple now. It’s really  went from strangers to become a married couple now. It’s really went from strangers to become a married couple now. It’s really went from strangers to become a married couple now. It’s really went from strangers to become a married couple now. It’s really an exciting experience.",
    },
  ];

  return (
    <>
      <div className="container-80">
        <div className="my-10">
          <h1 className="text-4xl text-center font-bold mb-6">
            Success <span className="text-cusRed"> Stories </span>
          </h1>
          <Swiper
            className=""
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Navigation]}
            navigation={true}
          >
            {data.map((dt) => {
              return (
                <>
                  <SwiperSlide className="">
                    <div className="card shadow-xl overflow-hidden m-5">
                      <div className="relative h-48 bg-blue-500">
                        <figure>
                          <Image
                            src={dt.img}
                            alt="Shoes"
                            fill
                            className="object-cover"
                          />
                        </figure>
                      </div>
                      <div className="p-3 h-48 overflow-hidden">
                        <h2 className="card-title py-2">{dt.couple}</h2>
                        <p>{dt.description.slice(0, 150)}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}

            {/* 
    link1: https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
    link2: 
    link3: 
    link4: https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
    link5: https://images.unsplash.com/photo-1609194455770-1bf3bb8f8913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
    link6: https://images.unsplash.com/photo-1606338786168-d3686d3d129b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80
*/}

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
