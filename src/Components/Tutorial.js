import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Desc, Border } from "./Utility";
import { useInView } from "react-intersection-observer";
import guide from "../Assets/Images/Contents/guide.png";
import { isMobile } from "react-device-detect";

const Box = styled.div`
  margin-top: ${(props) => (props.main ? "240px" : "180px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;

const LinkBox = styled.a`
  max-width: 420px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
  }
  overflow: hidden;
  border-radius: 20px;
  background-color: rgba(42, 41, 41, 1);
`;

const Thumbnail = styled.div`
  width: 100%;
  padding-top: 56.25%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
`;

const LinkTitle = styled.div`
  margin-top: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 10px;
`;

const LinkDesc = styled.div`
  color: rgba(185, 185, 185, 0.5);
  font-size: 11px;
  margin-bottom: 15px;
`;

const Tutorial = ({ inViewFunc, main }) => {
  const [ref, inView] = useInView({
    threshold: 0.99,
  });
  useEffect(() => {
    if (main) {
      inViewFunc(2, inView);
    }
  }, [inView]);
  return (
    <Box id="menu2" ref={main ? ref : null} main={main}>
      <Title>칵테일 코스터 구매 방법</Title>
      <Border></Border>
      <Desc>
        NFT가 익숙하지 않으신 분들을 위해<p></p>NFT 구매 방법을 정리해봤어요.
      </Desc>
      <LinkBox
        isMobile={isMobile}
        href="https://www.notion.so/a821432b6ed34a96b38a5950bda1b7e2"
        target="_blank"
      >
        <Thumbnail img={guide}></Thumbnail>
        <LinkTitle>칵테일 코스터 구매 방법</LinkTitle>
        <LinkDesc>누를 시 노션 페이지 이동</LinkDesc>
      </LinkBox>
      <Desc>
        만약 구매 방법에서 궁금한 점이 있다면<p></p>
        모지또 연락처로 문의주세요!
      </Desc>
    </Box>
  );
};

export default Tutorial;
