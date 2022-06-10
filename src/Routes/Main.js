import React from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import MojittoArea from "../Components/MojittoArea";
import Intro from "../Components/Intro";
import About from "../Components/About";
import Background from "../Components/Background";
import Copyright from "../Components/Copyright";
import Contact from "../Components/Contact";
import Cursor from "../Components/Cursor";
import Roadmap from "../Components/Roadmap";
import Blender from "../Components/Blender";
import Opensea from "../Components/Opensea";
import Menu from "../Components/Menu";
import Tutorial from "../Components/Tutorial";

const Main = () => {
  const inViewFunc = (id, inView) => {
    if (inView) {
      document.getElementById(`menuitem${id}`).style.color =
        "rgba(255,255,255,1)";
      document.getElementById(`menuitem${id}`).style.fontWeight = "500";
    } else {
      document.getElementById(`menuitem${id}`).style.color =
        "rgba(185, 185, 185, 1)";
      document.getElementById(`menuitem${id}`).style.fontWeight = "300";
    }
  };

  return (
    <Container>
      <Header></Header>
      <MojittoArea inViewFunc={inViewFunc}></MojittoArea>
      <Intro inViewFunc={inViewFunc}></Intro>
      <Roadmap inViewFunc={inViewFunc}></Roadmap>
      <Tutorial inViewFunc={inViewFunc} main={true}></Tutorial>
      <About inViewFunc={inViewFunc}></About>
      <Blender inViewFunc={inViewFunc}></Blender>
      <Contact inViewFunc={inViewFunc}></Contact>
      <Copyright></Copyright>
      <Opensea></Opensea>
      <Background></Background>
      <Cursor></Cursor>
      <Menu></Menu>
    </Container>
  );
};

export default Main;
