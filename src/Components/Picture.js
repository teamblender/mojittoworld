import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 300px; */
  padding-top: 56.25%;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    border-radius: 0px;
  }
`;

const Picture = ({ img }) => {
  return <Box img={img}></Box>;
};

export default Picture;
