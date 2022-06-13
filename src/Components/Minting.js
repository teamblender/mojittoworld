import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { check_status, publicMint, connect } from "../Assets/Mint/mintScript";
import { isMobile } from "react-device-detect";

const Box = styled.div`
  max-width: 420px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(42, 41, 41, 1);
`;

const SBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
`;

const ItemBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  color: rgba(185, 185, 185, 0.5);
  font-size: 11px;
  margin-bottom: 15px;
  display: flex;
  width: 50px;
`;

const ItemValue = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 1);
  font-size: 11px;
  justify-content: flex-end;
  width: calc(100% - 50px);
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(85, 85, 85, 1);
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Button = styled.div`
  width: calc(50% - 5px);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(54, 54, 54, 1);
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
  :last-child {
    background-color: rgba(85, 85, 85, 1);
  }
`;

const Alert = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2;
`;

const Minting = () => {
  const [accounts, setAccounts] = useState();
  const check = async () => {
    const getAccounts = await window.klaytn.enable();
    setAccounts(getAccounts);
  };
  useEffect(() => {
    check();
    check_status();
  }, []);
  return (
    <Box>
      {isMobile ? (
        <Alert>
          앗! 모바일에선 구매가 불가능해요!<p></p>PC 크롬 브라우저에서
          접속해주실래요?
        </Alert>
      ) : accounts ? (
        <>
          <SBox>
            <Title>NFT 정보</Title>
            <ItemBox>
              <ItemTitle>민팅 가격</ItemTitle>
              <ItemValue id="mintPrice">1Klay</ItemValue>
            </ItemBox>
            <ItemBox>
              <ItemTitle>민팅 현황</ItemTitle>
              <ItemValue id="mintCnt">1Klay</ItemValue>
            </ItemBox>
          </SBox>
          <Border></Border>
          <SBox>
            <Title>지갑 정보</Title>
            <ItemBox>
              <ItemTitle>지갑 주소</ItemTitle>
              <ItemValue id="myWallet">지갑 연결 전</ItemValue>
            </ItemBox>
            <ItemBox>
              <ItemTitle>지갑 잔액</ItemTitle>
              <ItemValue id="myKlay">지갑 연결 전</ItemValue>
            </ItemBox>
          </SBox>
          <ItemBox>
            <Button onClick={connect}>지갑 연결</Button>
            <Button onClick={publicMint}>구매(민팅)</Button>
          </ItemBox>
        </>
      ) : (
        <Alert>
          아직 카이카스 지갑이 없으신 것 같아요!<p></p>아래에 있는 코스터 구매
          방법을<p></p>보시고 진행해주시겠어요?
        </Alert>
      )}
    </Box>
  );
};

export default Minting;
