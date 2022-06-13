import React, { useEffect } from "react";
import Container from "../Components/Container";
import Cursor from "../Components/Cursor";
import Tutorial from "../Components/Tutorial";
import Header from "../Components/Header";
import Picture from "../Components/Picture";
import mint from "../Assets/Images/Contents/mint.png";
import BottomTools from "../Components/BottomTools";
import {
  STitle,
  Title,
  Border,
  Margin,
  Desc,
  Space,
  SText,
  Outlink,
} from "../Components/Utility";
import Minting from "../Components/Minting";

const Mint = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <Header></Header>
      <Picture banner={true} img={mint}></Picture>
      <STitle>NFT 민팅</STitle>
      <Title>칵테일 코스터 구매</Title>
      <Border></Border>
      <Desc>
        모지또 칵테일 코스터 NFT는<p></p>클레이튼으로 만들어졌어요.
        <Space></Space>
        구글 크롬 브라우저에서<p></p>
        카이카스 지갑을 연결하여<p></p>구매하실 수 있답니다!
        <Space></Space>
        <Outlink url="https://teamblender.co/">
          Opensea에서 컬렉션 구경하기
        </Outlink>
      </Desc>
      <Minting></Minting>
      <Desc>
        <SText>
          - 참고사항 -<p></p>한 번에 1개씩 총 3개까지 구매할 수 있어요.<p></p>
          NFT 구매 방법은 아래 글을 참고해주세요!
        </SText>
      </Desc>
      <Tutorial></Tutorial>
      <BottomTools mint={true}></BottomTools>
      <Margin></Margin>
      <Cursor></Cursor>
    </Container>
  );
};

export default Mint;
