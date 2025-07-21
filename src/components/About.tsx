"use client";

import { useState , useEffect, useRef} from "react";

type About = {
  nome: string
  descricao : string
  image  ?: string
}

export default function About() {
  const [about, setAbout] = useState<About>()

    useEffect(() => {
      fetch("/data/sobre.json")
        .then((res) => res.json())
        .then((data: About) => {
          setAbout(data); // ✅ Aqui está o ajuste
        })
        .catch((err) => console.error("Erro ao carregar JSON:", err));
    }, []);
      



  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10 items-center">
      {/* Imagem */}
      <div className="flex justify-center items-center">
         <img src={about?.image} className="rounded-full bg-cyan-900 w-70 h-70 mr-2 shadow" id="ImageAbout"></img>
      </div>

      {/* Texto e botão */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800"> {about?.nome} <br></br> <em>Desenvolvedor </em></h1>
        <p className="text-gray-600 text-justify">
            {about?.descricao}
        </p>

        <div className="flex justify-center mt-6 items-start">
          <a
            className="inline-flex items-center justify-center bg-gray-800 text-white
                       rounded-full hover:bg-gray-700 transition-colors duration-300
                       h-12 w-96 text-lg font-semibold
                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 cursor-pointer"
          >
            Veja meus projetos
          </a>
        </div>
      </div>
    </div>
  );
}
