import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Title,
  Border,
  Desc,
  Space,
  HighLight,
  STitle,
  Outlink,
} from "./Utility";
import Carousel from "./Carousel";
import LinkArray from "../Assets/Data/LinkArray";
import Cards from "./Cards";
import { useInView } from "react-intersection-observer";

const Box = styled.div`
  margin-top: 190px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = ({ inViewFunc }) => {
  const [ref, inView] = useInView({
    threshold: 0.19,
  });
  useEffect(() => {
    inViewFunc(3, inView);
  }, [inView]);
  return (
    <Box className="dD" id="menu3" ref={ref}>
      <Title>모지또에 대해서</Title>
      <Border></Border>
      <Desc>
        모지또는 감정을 재료로<p></p>
        칵테일을 만드는 요정이에요.<Space></Space>
        귀엽고 장난기가 많지만<p></p>칵테일을 만드는 실력은 최고랍니다.
        <Space></Space>
        <HighLight>
          하루 동안의 감정을 전해주면<p></p>모지또는 하루를 돌아볼 수 있는
          <p></p>
          멋진 칵테일을 만들어줄 거예요!
        </HighLight>
        <Space></Space>그러니 순간순간의 감정들을
        <p></p>마음속에만 두지 말고<p></p>모지또에게 전해줘보세요!
      </Desc>
      <STitle>- 앱 소개 -</STitle>
      <Desc>
        데일리 이모지 다이어리, 모지또
        <Space></Space>
        <HighLight>
          감정을 마음껏 누를 수 있다는 장점과<p></p>귀엽고 재밌는 칵테일
          컨셉으로
          <p></p>많은 사랑을 받아오고 있어요.
        </HighLight>
        <Space></Space>
        <Outlink url="https://teamblender.github.io/mojito_policy_terms/#/">
          모지또 앱 다운로드하기
        </Outlink>
      </Desc>
      <STitle>- 주요 성과 -</STitle>
      <Carousel></Carousel>
      <STitle>- 제작 기록 -</STitle>
      <Cards LinkArray={LinkArray}></Cards>
    </Box>
  );
};

export default About;
