import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import EmojiArray from "../Assets/Data/EmojiArray";

const Box = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* background-color: white; */
  display: flex;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  z-index: 2000;
  outline: 2px solid;
  outline-color: rgba(30, 30, 30, 1);
  overflow: hidden;
`;

const Emoji = styled.img`
  width: 22px;
  height: 22px;
`;

const useCursor = () => {
  const cursor = useRef();
  const setPosition = (e) => {
    if (cursor.current) {
      cursor.current.style.top = e.y - cursor.current.offsetHeight / 2 + "px";
      cursor.current.style.left = e.x - cursor.current.offsetWidth / 2 + "px";
    } else {
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", setPosition);
    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);
  return cursor;
};
const randomEmoji = EmojiArray[Math.floor(Math.random() * EmojiArray.length)];
const Cursor = () => {
  const cursor = useCursor();
  return isMobile ? (
    ""
  ) : (
    <Box ref={cursor}>
      <Emoji src={randomEmoji}></Emoji>
    </Box>
  );
};

export default Cursor;
