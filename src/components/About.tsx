"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import imagem from "../../public/images/default.jpg"

type About = {
  nome: string;
  descricao: string;
  image?: string;
};

export default function About() {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    fetch("/data/sobre.json")
      .then((res) => res.json())
      .then((data: About) => {
        setAbout(data);
      })
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10 items-center">
      {/* Imagem */}
      <div className="flex justify-center items-center">
        {about ? (
          <Image
            src={about.image || imagem}
            alt="Imagem de perfil"
            width={280}
            height={280}
            className="rounded-full bg-cyan-900 w-[280px] h-[280px] mr-2 shadow"
            id="ImageAbout"
          />
        ) : (
          // Placeholder ou loading state
          <div className="w-[280px] h-[280px] bg-gray-300 animate-pulse rounded-full" />
        )}
      </div>

      {/* Texto e botão */}
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          {about?.nome ?? "Carregando..."} <br />
          <em>Desenvolvedor Full Stack</em>
        </h1>
        <p className="text-gray-600 text-justify">
          {about?.descricao ?? "Carregando descrição..."}
        </p>

        <div className="flex justify-center mt-6 items-start">
          <a
            className="inline-flex items-center justify-center bg-gray-800 text-white
                       rounded-full hover:bg-gray-700 transition-colors duration-300
                       h-12 w-96 text-lg font-semibold
                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 cursor-pointer"
            href="https://github.com/R-JAC0BS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja meus projetos
          </a>
        </div>
      </div>
    </div>
  );
}
