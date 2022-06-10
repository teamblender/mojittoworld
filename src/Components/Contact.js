import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Border, Desc } from "./Utility";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

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
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
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

const Contact = ({ inViewFunc }) => {
  const [ref, inView] = useInView({
    threshold: 0.999,
  });
  useEffect(() => {
    inViewFunc(5, inView);
  }, [inView]);
  return (
    <Box id="menu5" ref={ref}>
      <Title>모지또 연락처</Title>
      <Border></Border>
      <Desc>
        모지또 칵테일 코스터 관련 문의는<p></p>아래의 연락처에서 받고 있어요!
      </Desc>
      <ItemBox>
        <Item
          key="1"
          href="https://discord.gg/f94dUV9UCF"
          target="_blank"
          className="dD"
          isMobile={isMobile}
        >
          {/* <Icon></Icon> */}
          <Id>Mojitto Cocktail Bar</Id>
          <Action>누를 시 디스코드 이동</Action>
        </Item>
        <Item
          key="2"
          href="https://www.instagram.com/mojitto_official/"
          target="_blank"
          className="dD"
          isMobile={isMobile}
        >
          {/* <Icon></Icon> */}
          <Id>@mojitto_official</Id>
          <Action>누를 시 인스타그램 이동</Action>
        </Item>
        <Item
          key="3"
          onClick={() =>
            navigator.clipboard.writeText("blender.cowork@gmail.com")
          }
          isMobile={isMobile}
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
