import React from "react";
import styled from "styled-components";
// import bg from "../Assets/Images/bg.png";
import bg2 from "../Assets/Images/bg2.png";

const BG = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: ${(props) =>
    `rgba(10,10,10,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
  z-index: -1000;
`;

const Background = () => {
  return <BG img={bg2}></BG>;
};

export default Background;
