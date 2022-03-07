import React from "react";
import styled from "styled-components";
import { Title, Border, Desc } from "./Utility";
import BlenderCarousel from "./BlenderCarousel";

const Box = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Homepage = styled.a`
  text-decoration: underline;
  transition: 0.5s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }
`;

const Blender = () => {
  return (
    <Box>
      <Title>Team Blender</Title>
      <Border></Border>
      <Desc>
        모지또와 함께하는 우리는 팀 블렌더입니다!<p></p>
        <Homepage href="https://teamblender.co/" target="_blank">
          Team Blender 홈페이지 구경하기
        </Homepage>
      </Desc>
      <BlenderCarousel></BlenderCarousel>
    </Box>
  );
};

export default Blender;
