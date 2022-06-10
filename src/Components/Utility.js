import React from "react";
import styled from "styled-components";

const TitleCP = styled.div`
  width: 100%;
  font-size: ${(props) => (props.small ? "16px" : "24px")};
  text-align: center;
  line-height: 1.7;
  font-weight: 500;
  font-family: "GmarketSans";
`;

const Title = ({ children, small }) => {
  return (
    <TitleCP className="dD" small={small}>
      {children}
    </TitleCP>
  );
};

const BorderCP = styled.div`
  width: 70px;
  height: 1px;
  background-color: rgba(85, 85, 85, 1);
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Border = () => {
  return <BorderCP></BorderCP>;
};

const SpaceCP = styled.div`
  width: 100%;
  height: 10px;
`;

const Space = () => {
  return <SpaceCP></SpaceCP>;
};

const DescCP = styled.div`
  text-align: center;
  line-height: 1.7;
  font-weight: 300;
  color: rgba(185, 185, 185, 1);
`;

const Desc = ({ children }) => {
  return <DescCP className="dD">{children}</DescCP>;
};

const HighLightCP = styled.span`
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
`;

const HighLight = ({ children }) => {
  return <HighLightCP>{children}</HighLightCP>;
};

const STitleCP = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  color: rgba(185, 185, 185, 1);
  background-color: rgba(42, 41, 41, 1);
  padding: 7px 12px;
  font-size: 12px;
`;

const STitle = ({ children }) => {
  return <STitleCP className="dD">{children}</STitleCP>;
};

const STextCP = styled.span`
  text-align: center;
  line-height: 1.7;
  font-weight: 300;
  color: rgba(185, 185, 185, 1);
  font-size: 12px;
`;

const SText = ({ children }) => {
  return <STextCP>{children}</STextCP>;
};

const MarginCP = styled.div`
  width: 100%;
  height: 120px;
`;

const Margin = () => {
  return <MarginCP></MarginCP>;
};

const OutlinkCP = styled.a`
  text-decoration: underline;
  transition: 0.5s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }
`;

const Outlink = ({ children, url }) => {
  return (
    <OutlinkCP href={url} target="_blank">
      {children}
    </OutlinkCP>
  );
};

const ItemCP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-radius: 20px;
  background-color: rgba(42, 41, 41, 1);
`;

const ItemTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  margin-bottom: 3px;
`;

const ItemDesc = styled.div`
  font-size: 12px;
`;

const Item = ({ title, desc }) => {
  return (
    <ItemCP>
      <ItemTitle>{title}</ItemTitle>
      <ItemDesc>{desc}</ItemDesc>
    </ItemCP>
  );
};

export {
  Title,
  Border,
  Space,
  Desc,
  HighLight,
  STitle,
  Margin,
  SText,
  Outlink,
  Item,
};
