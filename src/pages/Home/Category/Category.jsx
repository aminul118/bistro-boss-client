import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Category.css";
import img from "../../../assets/home/chef-service.jpg";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle";
import Cover from "../../shared/Cover/COver";

const Category = () => {
  return (
    <section>
      <SectionTitle subtitle="From 11:00am to 10:00pm" title="ORDER ONLINE" />
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
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
        className="my-8"
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
          <h1 className="-mt-14 text-center text-3xl uppercase text-white bg-opa">
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
          <h1 className="-mt-14 text-center text-3xl uppercase text-white ">
            Desserts
          </h1>
        </SwiperSlide>
      </Swiper>
      <Cover
        backgroundColour="bg-white/85"
        image={img}
        tittle="Bistro Boss"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam, odio odit natus, tempore,
         earum quam minus mollitia aliquam rerum fugit harum non dolor quo vero ratione officiis amet consequatur?"
      />
    </section>
  );
};

export default Category;
