import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mojitto from "../Assets/Images/Icons/mojitto.gif";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Box = styled.a`
  position: fixed;
  width: 250px;
  max-width: 800px;
  height: 50px;
  border-radius: 25px;
  right: 30px;
  bottom: ${(props) => (props.visible ? "30px" : "-100px")};
  border: 2px solid;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(54, 54, 54, 1);
  border-color: rgba(54, 54, 54, 1);
  transition: 0.5s ease-in-out;
  transition-property: bottom, border, color;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  font-weight: 500;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(54, 54, 54, 1)" : "rgba(255, 255, 255, 1)"};
  }
  @media screen and (max-width: 1450px) {
    width: calc(100% - 20px);
    max-width: 240px;
    bottom: ${(props) => (props.visible ? "30px" : "-100px")};
    right: auto;
  }
`;

const Mojitto = styled.img`
  position: absolute;
  right: 15px;
  top: -53px;
  height: 60px;
  @media screen and (max-width: 1450px) {
    display: none;
  }
`;

const Opensea = () => {
  const navigate = useNavigate();
  const [scrollValue, setScrollValue] = useState({
    scrollHeight: 0,
  });
  const scrollFunc = () => {
    const scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const entireHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollRatio = (scrollHeight / entireHeight) * 100;
    setScrollValue({
      scrollHeight: scrollHeight,
      scrollRatio: scrollRatio,
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      scrollFunc();
    };
  }, []);
  const goToMint = () => {
    navigate("/mint");
  };
  return (
    <Box
      visible={scrollValue.scrollHeight > 920 ? true : false}
      onClick={goToMint}
      isMobile={isMobile}
    >
      모지또 칵테일 코스터 사러가기
      <Mojitto src={mojitto}></Mojitto>
    </Box>
  );
};

export default Opensea;
