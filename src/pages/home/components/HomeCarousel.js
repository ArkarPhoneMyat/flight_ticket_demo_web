import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images } from "../../../constants";
import {Styled} from './HomeStyle'

export default function HomeCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 678 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 678, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      containerclassName="carousel-container"
      infinite={true}
    >
      <Styled.CarouselImageDiv>
        <Styled.CarouselImage src={images.travel1} />
      </Styled.CarouselImageDiv>
      <Styled.CarouselImageDiv>
        <Styled.CarouselImage src={images.travel2} />
      </Styled.CarouselImageDiv>
      <Styled.CarouselImageDiv>
        <Styled.CarouselImage src={images.travel3} />
      </Styled.CarouselImageDiv>
    </Carousel>
  );
}
