import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

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
import Step13Page from "./step13";
import Step14Page from "./step14";
import Step15Page from "./step15";
import LoadingPage from "./loading";
import CheckoutPage from "./checkout";
import FinishPage from "./finish";

const RouterController: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <PresselPage />} />
        <Route path="/step1" exact component={() => <Step1Page />} />
        <Route path="/step2" exact component={() => <Step2Page />} />
        <Route path="/step3" exact component={() => <Step3Page />} />
        <Route path="/step4" exact component={() => <Step4Page />} />
        <Route path="/step5" exact component={() => <Step5Page />} />
        <Route path="/step6" exact component={() => <Step6Page />} />
        <Route path="/step7" exact component={() => <Step7Page />} />
        <Route path="/step8" exact component={() => <Step8Page />} />
        <Route path="/step9" exact component={() => <Step9Page />} />
        <Route path="/step10" exact component={() => <Step10Page />} />
        <Route path="/step11" exact component={() => <Step11Page />} />
        <Route path="/step12" exact component={() => <Step12Page />} />
        <Route path="/step13" exact component={() => <Step13Page />} />
        <Route path="/step14" exact component={() => <Step14Page />} />
        <Route path="/step15" exact component={() => <Step15Page />} />
        <Route path="/loading" exact component={() => <LoadingPage />} />
        <Route path="/checkout" exact component={() => <CheckoutPage />} />
        <Route path="/finish" exact component={() => <FinishPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterController;
