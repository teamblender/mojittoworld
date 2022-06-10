import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import MojittoArray from "../Assets/Data/MojittoArray";
import glass_fg from "../Assets/Images/Cocktail/glass_fg.png";
import glass_af from "../Assets/Images/Cocktail/glass_af.png";
import glass_vr from "../Assets/Images/Cocktail/glass_vr.png";

const Box = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
  @media screen and (max-width: 800px) {
    border-radius: 0px;
  }
`;

const ItemBox = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
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

const CocktailBox = styled.div`
  height: 50px;
  margin-bottom: 15px;
  display: flex;
  align-items: flex-end;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rgba(42, 41, 41, 1)"};
`;

const Cocktail = styled.img`
  height: 50px;
`;

const Category = styled.div`
  margin-bottom: 5px;
  color: rgba(185, 185, 185, 1);
  @media screen and (max-width: 800px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
`;

const Contents = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

const Carousel = () => {
  const glassType = {
    fg: glass_fg,
    af: glass_af,
    vr: glass_vr,
  };
  const RandomArray = MojittoArray.sort(function () {
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
              <CocktailBox bgColor={item.bgColor}>
                <Cocktail src={glassType[item.cid]}></Cocktail>
              </CocktailBox>
              <Category>
                {item.cid === "af" ? "앱스토어 피처드 " : item.category}
              </Category>
              <Contents>{item.contents}</Contents>
            </Item>
          </ItemBox>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
