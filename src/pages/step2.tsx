import React from "react";
import LayoutFragment from "../layout";
import { useNavigate } from "react-router-dom";

const Step2Page: React.FC = () => {

  const navigate = useNavigate();

  return (
    <LayoutFragment type="first" page="3/26" desc="METAS">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Escolha seu tipo de corpo
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step3')}>
          Magro
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step3')}>
          Médio
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step3')}>
          Acima do peso
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step2Page;
