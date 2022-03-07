import React, { useEffect } from "react";
import styled from "styled-components";
import mojitto from "../Assets/Images/Icons/mojitto.png";
import { useNavigate } from "react-router-dom";

const Error = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorIcon = styled.img`
  width: 60px;
`;

const Fail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);
  return (
    <Error>
      <ErrorIcon src={mojitto}></ErrorIcon>
    </Error>
  );
};

export default Fail;
