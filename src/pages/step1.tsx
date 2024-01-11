import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step1Page: React.FC = () => {
  
  const history = useHistory();

  const handleButton = (text: string) => {
    localStorage.setItem('objetivo', text);
    history.push('/step2')
  }


  return (
    <LayoutFragment type="first" page="2/16" desc="METAS">
      <h1 className="text-center text-3xl text-gray-50 pr-10 pl-10 font-bold">
        Qual é o seu objetivo?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => handleButton('Ganho de massa')}>
          Ganho de massa
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => handleButton('Perca de peso')}>
          Emagrecer
        </button>
        <button className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20" onClick={() => handleButton('Qualidade de vida')}>
          Qualidade de vida
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step1Page;
