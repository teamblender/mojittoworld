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

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <MojittoArea></MojittoArea>
      <Intro></Intro>
      <About></About>
      <Roadmap></Roadmap>
      <Blender></Blender>
      <Contact></Contact>
      <Copyright></Copyright>
      <Opensea></Opensea>
      <Background></Background>
      <Cursor></Cursor>
    </Container>
  );
};

export default Main;
