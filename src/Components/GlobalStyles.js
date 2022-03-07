import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GmarketSansMedium from "../Assets/Fonts/GmarketSansMedium.ttf";

const globalStyles = createGlobalStyle`
${reset};
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}



@font-face {
  font-family: "GmarketSans";
  font-weight: 300;
  src: url(${GmarketSansMedium}) format('truetype')
}

::selection {
   background: rgba(255, 255, 255, 1);
}

a{
    text-decoration:none;
    color:inherit;
    cursor: none;
}

*{
    box-sizing:border-box;
}

button {
    outline: none;
    border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}

html {
    margin: 0;
    scroll-behavior: smooth;
    cursor: none;
}

body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 14px;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color:rgba(12,12,12,1.0);
    color: rgba(255, 255, 255, 1);
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}

.hide-scrollbar {
  /*FireFox*/
  scrollbar-width: none;
  /*IE10+*/
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.hide-scrollbar::-webkit-scrollbar {
  /*Chrome, Safari, Edge*/
  display: none;
}


  .slick-slide > div{
  margin-right: 10px;
  }

.flip { animation: flip 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip {
    0% { margin-top: -360px;}
    5% { margin-top: -270px;}
    25% { margin-top: -270px;}
    30% { margin-top: -180px;}
    50% { margin-top: -180px;}
    55% { margin-top: -90px;}
    75% { margin-top: -90px;}
    80% { margin-top: 0px;}
    99.99% { margin-top: 0px;}
    100% { margin-top: -270px;}
}


`;

export default globalStyles;
