import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import exit from "../Assets/Images/Icons/exit.png";
import left from "../Assets/Images/Icons/left.png";
import right from "../Assets/Images/Icons/right.png";
import { isMobile } from "react-device-detect";

const Box = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(12, 12, 12);
  background: -moz-linear-gradient(
    180deg,
    rgba(12, 12, 12, 0) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(12, 12, 12, 0) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(12, 12, 12, 0) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c0c0c",endColorstr="#0c0c0c",GradientType=1);
`;

const IconBox = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  position: absolute;
  width: 36px;
  height: 36px;
  right: ${(props) => (props.right ? "50px" : "none")};
  left: ${(props) => (props.left ? "50px" : "none")};
  border-radius: 50%;
  background-color: rgba(42, 41, 41, 1);
  justify-content: center;
  align-items: center;
  &:hover > img {
    opacity: ${(props) => (props.isMobile ? 0.3 : 1)};
  }
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
  }
`;

const Icon = styled.img`
  transition: 0.5s ease-in-out;
  width: 40%;
  height: 40%;
  opacity: 0.3;
`;

const BottomTools = ({ index, length, changePage, mint }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(-1);
  };
  return mint ? (
    <Box className="dD">
      <IconBox onClick={goHome} visible={true} isMobile={isMobile}>
        <Icon src={exit}></Icon>
      </IconBox>
    </Box>
  ) : (
    <Box className="dD">
      <IconBox
        onClick={() => changePage("L", index)}
        visible={index === 0 ? false : true}
        left={true}
        isMobile={isMobile}
      >
        <Icon src={left}></Icon>
      </IconBox>
      <IconBox onClick={goHome} visible={true} isMobile={isMobile}>
        <Icon src={exit}></Icon>
      </IconBox>
      <IconBox
        onClick={() => changePage("R", index)}
        visible={index === length - 1 ? false : true}
        right={true}
        isMobile={isMobile}
      >
        <Icon src={right}></Icon>
      </IconBox>
    </Box>
  );
};

export default BottomTools;
