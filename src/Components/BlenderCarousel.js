import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import BlenderArray from "../Assets/Data/BlenderArray";

const Box = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    border-radius: 0px;
  }
`;

const ItemBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(42, 41, 41, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 0px 15px;
  text-align: center;
`;

const ProfileBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 41, 41, 1);
`;

const Profile = styled.img``;

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 5px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const Position = styled.div`
  color: rgba(185, 185, 185, 1);
  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

const BlenderCarousel = () => {
  const RandomArray = BlenderArray.sort(function () {
    return Math.random() - Math.random();
  });
  const settings = {
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Slider {...settings}>
        {RandomArray.map((item, index) => (
          <ItemBox key={index}>
            <Item>
              <ProfileBox>
                <Profile src={item.img}></Profile>
              </ProfileBox>
              <Name>{item.name}</Name>
              <Position>{item.position}</Position>
            </Item>
          </ItemBox>
        ))}
      </Slider>
    </Box>
  );
};

export default BlenderCarousel;
