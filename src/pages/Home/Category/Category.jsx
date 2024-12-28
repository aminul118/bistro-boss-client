import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subtitle="From 11:00am to 10:00pm"
        title="ORDER ONLINE"
      />
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slide1} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h1 className="-mt-14 text-center text-3xl uppercase text-white">
            Desserts
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
