import React from "react";
import Coast from "../pages/Coast";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coast/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
