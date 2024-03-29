import React, { useEffect } from "react";
import styled from "styled-components";
import { Title, Border, Space, Desc, HighLight } from "./Utility";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const GoToOS = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(42, 41, 41, 1);
  margin-bottom: 30px;
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  transition: 0.5s ease-in-out;
  font-weight: 500;
  &:hover {
    border-color: ${(props) =>
      props.isMobile ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
  }
`;

const GoToOSBtn = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Intro = ({ inViewFunc }) => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.76,
  });
  const goToMint = () => {
    navigate("/mint");
  };
  useEffect(() => {
    inViewFunc(0, inView);
  }, [inView]);
  return (
    <Box className="dD" ref={ref}>
      <Title>
        모지또 해외 지점 내기<p></p>함께 해주실래요?
      </Title>
      <Border></Border>
      <Desc>
        칵테일로 표현하는 오늘의 기분!<p></p>
        데일리 이모지 다이어리, 모지또
        <Space></Space>
        <HighLight>
          2020년 국내 오픈 후<p></p>애정 가득한 관심 속에서 성장한 모지또가
          <p></p>
          해외 지점을 내려고 계획 중이에요!
        </HighLight>
        <Space></Space>2년 동안 쌓은 노하우를 바탕으로<p></p>완전 리뉴얼된 해외
        지점을 내려고 하는데요.
        <Space></Space>
        새로운 도전을 하는 모지또에게<p></p>
        응원과 후원이 필요한 상황이랍니다!
        <Space></Space>
        <HighLight>
          그래서 귀여운 칵테일 코스터 NFT를 만들어봤어요.<p></p>
          여유가 되신다면 한번 구매해주실래요?<p></p>
        </HighLight>
        <Space></Space>
        칵테일 코스터를 구매해주신 분들을 위해<p></p>
        다양한 혜택도 준비하고 있으니<p></p>
        많은 관심 부탁드려요!
        <p></p>
      </Desc>
      <GoToOS isMobile={isMobile}>
        <GoToOSBtn onClick={goToMint}>모지또 칵테일 코스터 사러가기</GoToOSBtn>
      </GoToOS>
    </Box>
  );
};

export default Intro;
