import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <section>
      <SectionTitle title="Testimonials" subtitle="What Our Clients Say" />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide key={item._id} className="py-14 ">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 130 }}
                  value={item.rating}
                />
                <p>{item.details}</p>
                <h3 className="text-3xl text-yellow-500">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
