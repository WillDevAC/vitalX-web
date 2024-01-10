import React from "react";
import LayoutFragment from "../layout";
import { useHistory } from "react-router-dom";

const Step5Page: React.FC = () => {
  const history = useHistory();

  return (
    <LayoutFragment type="first" page="6/16" desc="NIVEL DE PREPARO FÍSICO">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Quando você teve seu peso ideal pela última vez?
      </h1>
      <div className="flex flex-col items-center pt-5 gap-5 w-full p-7">
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step6")}
        >
          0-6 meses atrás
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step6")}
        >
          7-12 meses atrás
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step6")}
        >
          1-3 anos atrás
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step6")}
        >
          Mais de 3 anos atrás
        </button>
        <button
          className="flex justify-between  items-center text-lg text-white font-medium bg-zinc-800 p-5 w-full rounded-lg h-20"
          onClick={() => history.push("/step6")}
        >
          Nunca
        </button>
      </div>
    </LayoutFragment>
  );
};

export default Step5Page;
