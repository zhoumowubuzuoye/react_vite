/*
 * @Author: xiewenhao
 * @Date: 2023-03-15 14:46:04
 * @LastEditTime: 2023-03-15 16:48:23
 * @Description:
 */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SliderContainer } from "./style";
function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="before"></div>
        <div className="swiper-wrapper">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true ,}}
          >
            {bannerList.map((item) => {
              return (
                <SwiperSlide key={item.imageUrl}>
                  <img
                    src={item.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
