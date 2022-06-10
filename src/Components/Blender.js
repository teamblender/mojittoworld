import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Border, Desc, Outlink } from "./Utility";
import BlenderCarousel from "./BlenderCarousel";
import { useInView } from "react-intersection-observer";

const Box = styled.div`
  margin-top: 170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Blender = ({ inViewFunc }) => {
  const [ref, inView] = useInView({
    threshold: 0.97,
  });
  useEffect(() => {
    inViewFunc(4, inView);
  }, [inView]);
  return (
    <Box id="menu4" ref={ref}>
      <Title>Team Blender</Title>
      <Border></Border>
      <Desc>
        모지또와 함께하는 우리는 팀 블렌더입니다!<p></p>
        <Outlink url="https://teamblender.co/">
          Team Blender 홈페이지 구경하기
        </Outlink>
      </Desc>
      <BlenderCarousel></BlenderCarousel>
    </Box>
  );
};

export default Blender;
