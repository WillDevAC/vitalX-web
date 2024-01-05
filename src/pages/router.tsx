import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Route path="/" Component={PresselPage} />
        <Route path="/step1" Component={Step1Page} />
        <Route path="/step2" Component={Step2Page} />
        <Route path="/step3" Component={Step3Page} />
        <Route path="/step4" Component={Step4Page} />
        <Route path="/step5" Component={Step5Page} />
        <Route path="/step6" Component={Step6Page} />
        <Route path="/step7" Component={Step7Page} />
        <Route path="/step8" Component={Step8Page} />
        <Route path="/step9" Component={Step9Page} />
        <Route path="/step10" Component={Step10Page} />
        <Route path="/step11" Component={Step11Page} />
        <Route path="/step12" Component={Step12Page} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterController;
