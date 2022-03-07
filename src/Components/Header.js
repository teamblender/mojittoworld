import React from "react";
import styled from "styled-components";
import logo from "../Assets/Images/Icons/logo.png";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const LBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 20px;
`;

// const RBox = styled.div``;

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <Box>
      <LBox>
        <Logo src={logo} onClick={goHome}></Logo>
      </LBox>
      {/* <RBox></RBox> */}
    </Box>
  );
};

export default Header;
