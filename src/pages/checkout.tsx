import React, { useState, useEffect } from "react";
import LayoutFragment from "../layout";
import { Star } from "lucide-react";
import { useHistory } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const history = useHistory();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email") || "";
    setEmail(storedEmail);
  }, []);

  const handleContinueClick = () => {
    const userHeight = localStorage.getItem("altura") || "";
    const userWeight = localStorage.getItem("peso") || "";
    const objetivo = localStorage.getItem("objetivo") || "";
    const idade = localStorage.getItem("idade") || "";

    if(email === ''){
      alert('Preencha o campo de email!');
      return;
    }

    sendEmailToSupport(email, userHeight, userWeight, objetivo, idade);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmailToSupport = async (
    userEmail: string,
    userHeight: string,
    userWeight: string,
    objetivo: string,
    idade: string
  ) => {
    try {
      const response = await fetch("https://formspree.io/moqgqyol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          height: userHeight,
          weight: userWeight,
          objetivo: objetivo,
          idade: idade,
        }),
      });

      if (response.ok) {
        history.push('/finish')
      } else {
        alert('Falha, tente novamente mais tarde.')
      }
    } catch (error) {
      alert('Erro ao enviar o email!');
    }
  };

  return (
    <LayoutFragment type="normal" desc="0" page="#">
      <h1 className="text-center text-2xl text-gray-50 pr-10 pl-10 font-bold">
        Digite o seu e-mail para receber o seu{" "}
        <b className="text-blue-500">plano personalizado!</b>
      </h1>
      <div className="flex flex-col items-center justify-center pt-5 gap-5 w-full p-7">
        <input
          type="email"
          placeholder="E-mail"
          className="bg-zinc-800 p-3 w-72 text-white rounded-md"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="bg-zinc-800 m-5 p-5 rounded-lg flex gap-2">
        <Star color="#feec4b" />
        <p className="text-white font-bold text-sm">
          +100 mil usuários utilizam nossos treinos
        </p>
      </div>
      <div className="m-5">
        <button
          onClick={handleContinueClick}
          className={'flex mt-10 gap-3 items-center justify-center text-lg text-white font-bold bg-zinc-800 p-5 w-full rounded-lg h-20'}>
          CONTINUAR
        </button>
      </div>
    </LayoutFragment>
  );
};

export default CheckoutPage;
