import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mojitto from "../Assets/Images/Icons/mojitto.gif";

const Box = styled.a`
  position: fixed;
  width: 250px;
  max-width: 800px;
  height: 50px;
  border-radius: 25px;
  right: 30px;
  bottom: ${(props) => (props.visible ? "30px" : "-100px")};
  outline: 2px solid;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(54, 54, 54, 1);
  outline-color: rgba(54, 54, 54, 1);
  transition: bottom 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  &:hover {
    outline-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }
  @media screen and (max-width: 1450px) {
    width: calc(100% - 20px);
    max-width: 240px;
    bottom: ${(props) => (props.visible ? "15px" : "-100px")};
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
  return (
    <Box
      visible={scrollValue.scrollHeight > 920 ? true : false}
      href="https://junwoolee.me"
      target="_blank"
    >
      모지또 칵테일 코스터 구경하러 가기
      <Mojitto src={mojitto}></Mojitto>
    </Box>
  );
};

export default Opensea;
