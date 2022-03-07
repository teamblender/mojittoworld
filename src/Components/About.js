import React from "react";
import styled from "styled-components";
import { Title, Border, Desc, Space, HighLight, STitle } from "./Utility";
import Carousel from "./Carousel";
import LinkArray from "../Assets/Data/LinkArray";
import Cards from "./Cards";

const Box = styled.div`
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const About = () => {
  return (
    <Box className="dD">
      <Title>모지또에 대해서</Title>
      <Border></Border>
      <Desc>
        그 날의 감정을 재료로<p></p>하루를 돌아볼 멋진 칵테일을 타주는
        <p></p>데일리 이모지 다이어리, 모지또<Space></Space>
        <HighLight>
          감정을 마음껏 누를 수 있다는 장점과<p></p>귀엽고 재밌는 칵테일
          컨셉으로
          <p></p>많은 사랑을 받아오고 있어요.
        </HighLight>
        <Space></Space>
        지금까지 모지또가 운영되며<p></p>쌓인 기록들을 확인해보실래요?
      </Desc>
      <STitle>- 주요 성과 -</STitle>
      <Carousel></Carousel>
      <STitle>- 제작 기록 -</STitle>
      <Cards LinkArray={LinkArray}></Cards>
    </Box>
  );
};

export default About;
