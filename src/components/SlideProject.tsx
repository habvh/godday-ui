import { memo } from "react";
import { Content } from "./Content";
import { Image } from "./Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "./Button";

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
      <Content className="bg-go-gray py-8 md:py-10 lg:py-20">
        <div className="text-center mb-6 md:mb-14">
          <h3 className="text-2xl xl:text-4xl font-medium mb-2">
            Templates designed to sell
          </h3>
          <p>Choose from 100s of designs for every idea and industry</p>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Image
                imageUrl={project.url}
                className="min-h-[40vw] xl:min-h-[25vw]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4 md:mt-10 flex-col md:flex-row">
          <Button>Browser All Templetes</Button>
        </div>
      </Content>
    </section>
  );
};

export default memo(SlideProject);
