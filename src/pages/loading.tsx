import React, { useState, useEffect } from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const LoadingPage: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((prevPercentage) => Math.min(prevPercentage + 1, 100));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      setLoadingComplete(true);
    }
  }, [percentage]);

  useEffect(() => {
    if (loadingComplete) {
      const timeoutId = setTimeout(() => {
        history.push("/checkout"); 
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loadingComplete, history]);

  return (
    <LayoutFragment type="first" page={`16/16`} desc='FINALIZANDO'>
      <div className="flex flex-col items-center justify-center pt-5 gap-5 w-full p-7">
        <div className="bg-zinc-800 border border-gray-300  p-5 flex items-center gap-3 rounded-md">
          <div className="progress-circle-container">
            <div className="text-white">{percentage}%</div>
            <div className="progress-circle" style={{ background: `conic-gradient(#3498db ${percentage}%, #2c3e50 ${percentage}%)` }}></div>
          </div>
          <span className="text-white">{loadingComplete ? "Planos de treinos finalizados..." : "Criando seu plano de treino personalizado..."}</span>
        </div>
      </div>
    </LayoutFragment>
  );
};

export default LoadingPage;
