import React from "react";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import PresselPage from "./pressel";

import Step1Page from "./step1";
import Step2Page from "./step2";
import Step3Page from "./step3";
import Step4Page from "./step4";
import Step5Page from "./step5";
import Step6Page from "./step6";
import Step7Page from "./step7";
import Step8Page from "./step8";
import Step9Page from "./step9";
import Step10Page from "./step10";
import Step11Page from "./step11";
import Step12Page from "./step12";

const RouterController: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PresselPage/>} />
        <Route path="/step1" element={<Step1Page/>} />
        <Route path="/step2" element={<Step2Page/>} />
        <Route path="/step3" element={<Step3Page/>} />
        <Route path="/step4" element={<Step4Page/>} />
        <Route path="/step5" element={<Step5Page/>} />
        <Route path="/step6" element={<Step6Page/>} />
        <Route path="/step7" element={<Step7Page/>} />
        <Route path="/step8" element={<Step8Page/>} />
        <Route path="/step9" element={<Step9Page/>} />
        <Route path="/step10" element={<Step10Page/>} />
        <Route path="/step11" element={<Step11Page/>} />
        <Route path="/step12" element={<Step12Page/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterController;
