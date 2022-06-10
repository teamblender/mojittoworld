import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../Routes/Main";
import Fail from "./Fail";
import Benefit from "../Routes/Benefit";
import Mint from "../Routes/Mint";

export default () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/benefit" element={<Benefit></Benefit>} />
        <Route path="/mint" element={<Mint></Mint>} />
        <Route path="/*" element={<Fail></Fail>} />
      </Routes>
    </HashRouter>
  );
};
