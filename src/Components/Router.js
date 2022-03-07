import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Routes/Main";
import Fail from "./Fail";
import Benefit from "../Routes/Benefit";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/benefit" element={<Benefit></Benefit>} />
        <Route path="/*" element={<Fail></Fail>} />
      </Routes>
    </BrowserRouter>
  );
};
