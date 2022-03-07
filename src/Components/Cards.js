import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 840px) {
    justify-content: center;
  }
`;

const Card = styled.a`
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: rgba(42, 41, 41, 1);
  border-radius: 20px;
  overflow: hidden;
  :nth-child(odd) {
    margin-right: 20px;
  }
  outline: 2px solid;
  outline-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  &:hover {
    outline-color: rgba(255, 255, 255, 1);
  }
  @media screen and (max-width: 840px) {
    width: calc(100% - 20px);
    margin-bottom: 10px;
    :nth-child(odd) {
      margin-right: 0px;
    }
  }
`;

const CardT = styled.div`
  width: 100%;
  padding-top: 56.25%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
`;

const CardB = styled.div`
  padding: 25px 25px 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
  font-weight: 500;
`;

const Desc = styled.div`
  line-height: 1.7;
  color: rgba(185, 185, 185, 1);
  margin-bottom: 20px;
  font-weight: 300;
`;

const Date = styled.div`
  color: rgba(185, 185, 185, 0.5);
  font-size: 11px;
  font-weight: 200;
`;

const Cards = ({ LinkArray }) => {
  return (
    <Box>
      {LinkArray.map((link, index) => (
        <Card key={index} href={link.url} target="_blank">
          <CardT img={link.img}></CardT>
          <CardB>
            <Title>{link.title}</Title>
            <Desc>{link.desc}</Desc>
            <Date>{link.date}</Date>
          </CardB>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
