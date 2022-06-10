import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Box = styled.div`
  width: 100%;
  /* background-color: red; */
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
  @media screen and (max-width: 600px) {
    border-radius: 0px;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 56.25%;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
`;

const BenefitCarousel = ({ img }) => {
  const settings = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    centerPadding: "0px",
  };
  return (
    <Box>
      <Slider {...settings} className="benefitCarousel">
        {img.map((item, index) => (
          <Item img={item} key={index}></Item>
        ))}
      </Slider>
    </Box>
  );
};

export default BenefitCarousel;
