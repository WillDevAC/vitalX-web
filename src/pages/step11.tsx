import React from "react";
import LayoutFragment from "../layout";
import { useNavigate } from "react-router-dom";

const Step11Page: React.FC = () => {

  const navigate = useNavigate();

  return (
    <LayoutFragment type="first" page="12/26" desc="ESTILO DE VIDA">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Qual seu consumo de água diariamente?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step12')}>
          Eu bebo apenas chá e café
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step12')}>
          Menos de 2 copos
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step12')}>
          2-6 copos
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step12')}>
          7-10 copos
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => navigate('/step12')}>
            mais de 10 copos
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step11Page;
