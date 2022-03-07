import React from "react";
import styled from "styled-components";

const BBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.benefit ? "600px" : "800px")};
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

const Container = ({ children, benefit }) => {
  return (
    <BBox className="hide-scrollbar">
      <SBox benefit={benefit}>{children}</SBox>
    </BBox>
  );
};

export default Container;
