import { useState, memo, useEffect, useRef } from "react";
import { Content } from "./Content";
import { Image } from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const projects = [
  {
    url: "https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const SlideProject = () => {
  return (
    <section>
      <Content className="bg-go-gray py-10">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Templates designed to sell</h3>
          <p>Choose from 100s of designs for every idea and industry</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Image imageUrl={project.url} className="h-[25vw]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </section>
  );
};

export default memo(SlideProject);
