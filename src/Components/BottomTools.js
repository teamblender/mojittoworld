import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import exit from "../Assets/Images/Icons/exit.png";
import left from "../Assets/Images/Icons/left.png";
import right from "../Assets/Images/Icons/right.png";

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
    opacity: 1;
  }
  outline: 2px solid;
  outline-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    outline-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
  :nth-child(2) {
    margin: 0px 30px;
  }
`;

const Icon = styled.img`
  transition: 0.5s ease-in-out;
  width: 40%;
  height: 40%;
  opacity: 0.3;
`;

const BottomTools = ({ index, length, changePage }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <Box className="dD">
      <IconBox
        onClick={() => changePage("L", index)}
        visible={index === 0 ? false : true}
        left={true}
      >
        <Icon src={left}></Icon>
      </IconBox>
      <IconBox onClick={goHome} visible={true}>
        <Icon src={exit}></Icon>
      </IconBox>
      <IconBox
        onClick={() => changePage("R", index)}
        visible={index === length - 1 ? false : true}
        right={true}
      >
        <Icon src={right}></Icon>
      </IconBox>
    </Box>
  );
};

export default BottomTools;
