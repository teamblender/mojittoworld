import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
  color: rgba(185, 185, 185, 0.5);
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 1450px) {
    margin-bottom: 100px;
  }
`;

const Blender = styled.a`
  text-decoration: underline;
  transition: 0.5s ease-in-out;
  margin-right: 5px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Copyright = () => {
  return (
    <Box>
      <Blender href="https://teamblender.co/" target="_blank">
        ©TEAM BLENDER
      </Blender>
      ALL RIGHTS RESERVED.
    </Box>
  );
};

export default Copyright;
