"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contato() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_dnjj7tl",      
        "template_mc2p8b8",     
        form.current,
        "thGmhBJTZ_KnCYxi_"          
      )
      .then(
        () => {
          setSent(true);
          form.current?.reset();

        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 h-1/3 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Entre em contato</h2>
      <form ref={form} onSubmit={sendEmail} className=" bg-white p-6 rounded-3xl shadow-lg bg-amber-800 w-8/12 items-center justify-center ">
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          required
          rows={6}
          className="w-full mb-4 p-3 border border-gray-300 rounded "
        ></textarea>
        <button
          type="submit"
          className="w-4/12 bg-black text-white py-3 hover:bg-gray-800 transition cursor-pointer rounded-3xl mx-auto block"
        >
          Enviar mensagem
        </button>
        {sent && (
          <p className="text-green-600 mt-4 ">Mensagem enviada com sucesso!</p>
        )}
      </form>
    </div>
  );
}
