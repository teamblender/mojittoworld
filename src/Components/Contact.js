import React from "react";
import styled from "styled-components";
import { Title, Border, Desc } from "./Utility";

const Box = styled.div`
  margin-top: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(42, 41, 41, 1);
  border-radius: 20px;
  height: 100px;
  width: calc(33% - 10px);
  :nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
  outline: 2px solid;
  outline-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    outline-color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 830px) {
    width: calc(100% - 20px);
    margin-bottom: 15px;
    height: 80px;
    :nth-child(2) {
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`;

// const Icon = styled.img``;

const Id = styled.div`
  margin-bottom: 9px;
  font-weight: 500;
`;

const Action = styled.div`
  color: rgba(185, 185, 185, 0.5);
  font-size: 11px;
  font-weight: 300;
`;

const Contact = () => {
  return (
    <Box>
      <Title>모지또 연락처</Title>
      <Border></Border>
      <Desc>
        모지또 칵테일 코스터 관련 문의는<p></p>아래의 연락처에서 받고 있어요!
      </Desc>
      <ItemBox>
        <Item
          key="1"
          href="https://www.instagram.com/mojitto_official/"
          target="_blank"
          className="dD"
        >
          {/* <Icon></Icon> */}
          <Id>@mojitto_official</Id>
          <Action>누를 시 인스타그램 이동</Action>
        </Item>
        <Item key="2" href="" target="_blank" className="dD">
          {/* <Icon></Icon> */}
          <Id>di</Id>
          <Action>누를 시 디스코드 이동</Action>
        </Item>
        <Item
          key="3"
          onClick={() =>
            navigator.clipboard.writeText("blender.cowork@gmail.com")
          }
        >
          {/* <Icon></Icon> */}
          <Id>blender.cowork@gmail.com</Id>
          <Action className="dD">누를 시 주소 복사</Action>
        </Item>
        {/* <Clipboard text="blender.cowork@gmail.com">
          <>
            <Id>blender.cowork@gmail.com</Id>
            <Action>누를 시 주소 복사</Action>
          </>
        </Clipboard> */}
      </ItemBox>
    </Box>
  );
};

export default Contact;
