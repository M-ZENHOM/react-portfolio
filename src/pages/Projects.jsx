import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Mousewheel,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper";
import { motion as m } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { ProData } from "../SubComponents/Data";
import Card from "../components/Card";

const Container = styled(m.section)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .swiper {
    width: 90%;
    height: 600px;
    border-radius: 30px;
    transition: 0.7s;
    .swiper-slide {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      @media (max-width: 640px) {
        margin-bottom: 50px;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.colors.heading};
    }
    .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.colors.heading};
    }
  }
`;

export const Projects = () => {
  return (
    <Container
      initial={{
        x: "-100%",
      }}
      animate={{ x: "0%" }}
      exit={{
        x: "100%",
      }}
      transition={{ duration: 0.5 }}
    >
      <Wrapper>
        <Swiper
          effect={"coverflow"}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            EffectCoverflow,
            Autoplay,
          ]}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
        >
          {ProData.map((d) => (
            <SwiperSlide key={d.id}>
              <Card data={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  );
};
