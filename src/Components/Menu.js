import React from "react";
import styled from "styled-components";
import { Border } from "./Utility";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Box = styled.div`
  width: 140px;
  position: fixed;
  top: 25px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: left;
  line-height: 1.7;
  font-weight: 500;
  font-family: "GmarketSans";
`;

const Item = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 1.7;
  font-weight: 300;
  color: rgba(185, 185, 185, 1);
  margin-bottom: 10px;
  transition: 0.5s ease-in-out;
`;

const Menu = () => {
  const MenuArray = [
    "모지또 해외 지점 내기",
    "칵테일 코스터 구매 혜택",
    "칵테일 코스터 구매 방법",
    "모지또에 대해서",
    "Team Blender",
    "모지또 연락처",
  ];
  return (
    <Box className="dD">
      <Title>메뉴</Title>
      <Border></Border>
      {MenuArray.map((menu, index) => (
        <AnchorLink key={index} offset="50" href={`#menu${index}`}>
          <Item id={`menuitem${index}`}>{menu}</Item>
        </AnchorLink>
      ))}
    </Box>
  );
};

export default Menu;
