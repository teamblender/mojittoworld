import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import Cursor from "../Components/Cursor";
import { Title, Border, Desc, STitle, Margin } from "../Components/Utility";
import RoadmapArray from "../Assets/Data/RoadmapArray";
import { useLocation } from "react-router-dom";
import Picture from "../Components/Picture";
import BottomTools from "../Components/BottomTools";
import BenefitCarousel from "../Components/BenefitCarousel";

const Benefit = () => {
  const params = useLocation();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIndex(params.state.index);
  }, []);
  const changePage = (LR, index) => {
    if (LR === "L") {
      setIndex(index - 1);
    } else {
      setIndex(index + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container benefit={true}>
      <Header></Header>
      {RoadmapArray[index].img.length === 1 ? (
        <Picture img={RoadmapArray[index].img[0]}></Picture>
      ) : (
        <BenefitCarousel img={RoadmapArray[index].img}></BenefitCarousel>
      )}
      <STitle>{RoadmapArray[index].milestone}</STitle>
      <Title small={true}>{RoadmapArray[index].benefit}</Title>
      <Border></Border>
      <Desc>{RoadmapArray[index].desc}</Desc>
      <Margin></Margin>
      <BottomTools
        index={index}
        length={RoadmapArray.length}
        changePage={changePage}
      ></BottomTools>
      <Cursor></Cursor>
    </Container>
  );
};

export default Benefit;
