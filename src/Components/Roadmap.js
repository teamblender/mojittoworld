import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Border, Desc, Space, HighLight } from "./Utility";
import RoadmapArray from "../Assets/Data/RoadmapArray";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

const Box = styled.div`
  margin-top: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 0px;
  width: 3px;
  height: calc(100% + 50px);
  background-color: rgba(85, 85, 85, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  ::before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: rgba(85, 85, 85, 1);
    position: absolute;
    transform: rotate(180);
    bottom: 0px;
  }
  ::after {
    content: "혜택은 이어집니다!";
    font-size: 12px;
    position: absolute;
    bottom: -30px;
    text-align: center;
    width: 120px;
    color: rgba(85, 85, 85, 1);
  }
`;

const DotSet = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.direction === "r" ? "flex-end" : "flex-start"};
  transition: 0.5s ease-in-out;
  position: relative;
  margin-bottom: 40px;
`;

const Dot = styled.div`
  position: absolute;
  transition: 0.5s ease-in-out;
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.state === 0 ? "rgba(255, 255, 255, 1)" : "rgba(85, 85, 85, 1)"};
  border-radius: 20px;
  top: 0px;
  right: calc(50% - 8px);
  animation: ${(props) =>
    props.state === 1 ? "blink-effect 2s infinite" : "none"};
`;

const Contents = styled.div`
  margin-top: 2px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.direction === "r" ? "flex-start" : "flex-end"};
  text-align: ${(props) => (props.direction === "r" ? "left" : "right")};
  padding: ${(props) =>
    props.direction === "r" ? "0px 0px 0px 20px" : "0px 20px 0px 0px"};
  overflow: hidden;
  &:hover ~ .dot {
    background-color: ${(props) =>
      props.isMobile ? "rgba(85, 85, 85, 1)" : "rgba(255, 255, 255, 1)"};
  }
  &:hover > .contents {
    color: ${(props) =>
      props.isMobile ? "rgba(85, 85, 85, 1)" : "rgba(255, 255, 255, 1)"};
  }
  &:hover > .thumbnail {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
  }
  @media screen and (max-width: 800px) {
    padding: ${(props) =>
      props.direction === "r" ? "0px 0px 0px 15px" : "0px 15px 0px 0px"};
  }
`;

const Milestone = styled.div`
  transition: 0.5s ease-in-out;
  color: ${(props) =>
    props.state < 2 ? "rgba(255, 255, 255, 1);" : "rgba(85, 85, 85, 1);"};
  /* font-size: 12px; */
  margin: ${(props) =>
    props.direction === "r" ? "0px 0px 12px 10px" : "0px 10px 12px 0px"};
`;

const Thumbnail = styled.div`
  width: 95%;
  padding-top: 53.4375%;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 2px solid;
  border-color: ${(props) =>
    props.state < 2 ? "rgba(255, 255, 255, 1);" : "rgba(42, 41, 41, 1)"};
  transition: 0.5s ease-in-out;
`;

const Benefit = styled.div`
  margin: ${(props) =>
    props.direction === "r" ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  transition: 0.5s ease-in-out;
  color: ${(props) =>
    props.state < 2 ? "rgba(255, 255, 255, 1);" : "rgba(85, 85, 85, 1);"};
  font-weight: 500;
  line-height: 1.5;
`;

const Roadmap = ({ inViewFunc }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
  });
  useEffect(() => {
    inViewFunc(1, inView);
  }, [inView]);
  const navigate = useNavigate();
  const goToDetail = (index) => {
    navigate("/benefit", { state: { index: index } });
  };
  return (
    <Box className="dD" id="menu1" ref={ref}>
      <Title>칵테일 코스터 구매 혜택</Title>
      <Border></Border>
      <Desc>
        모지또 칵테일 코스터 NFT를<p></p>구매해주신 분들께 감사의 의미로
        <p></p>
        <HighLight>
          Welcome Gift 증정은 물론
          <p></p>다양한 혜택을 드릴 예정이에요!
        </HighLight>
        <Space></Space>각 혜택을 눌러 자세히 볼 수 있어요.
      </Desc>
      <RBox>
        <Line length={RoadmapArray.length}></Line>
        {RoadmapArray.map((item, index) => (
          <DotSet index={index} key={index} direction={item.direction}>
            <Contents
              direction={item.direction}
              onClick={() => goToDetail(index)}
              isMobile={isMobile}
            >
              <Milestone
                className="contents"
                direction={item.direction}
                state={item.state}
              >
                {item.milestone}
              </Milestone>
              <Thumbnail
                className="thumbnail"
                img={item.img[0]}
                state={item.state}
              ></Thumbnail>
              <Benefit
                className="contents"
                direction={item.direction}
                state={item.state}
              >
                {item.benefit}
              </Benefit>
            </Contents>
            <Dot className="dot" state={item.state}></Dot>
          </DotSet>
        ))}
      </RBox>
    </Box>
  );
};

export default Roadmap;
