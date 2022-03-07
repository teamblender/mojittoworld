import React from "react";
import styled from "styled-components";
import mojitto from "../Assets/Images/Icons/mojitto.gif";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 150px;
  margin-bottom: -30px;
`;

const FlipBox = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;
  height: 35px;
  padding-top: 10px;
  margin-top: -10px;
  li {
    padding: 0 10px;
    height: 45px;
    margin-bottom: 45px;
    display: block;
    font-size: 18px;
    font-weight: 500;
  }
`;

const FlipList = styled.ul`
  font-weight: 500;
`;

const KR = styled.li``;

const EN = styled.li`
  font-family: "Roboto", sans-serif;
`;

const CN = styled.li`
  font-family: "Noto Sans SC", sans-serif;
`;

const JP = styled.li`
  font-family: "Noto Sans JP", sans-serif;
`;

const BBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mojitto = styled.img`
  height: 128px;
`;

const MojittoArea = () => {
  return (
    <Box className="dD">
      <TBox>
        <FlipBox>
          <FlipList className="flip">
            <JP>こんにちは! モジット</JP>
            <CN>你好! 魔吉多</CN>
            <EN>Hello! Mojitto</EN>
            <KR>안녕! 모지또</KR>
          </FlipList>
        </FlipBox>
      </TBox>
      <BBox>
        <Mojitto src={mojitto}></Mojitto>
      </BBox>
    </Box>
  );
};

export default MojittoArea;
