"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import routes from "@/assets/keyValue";

import { FaCheck, FaEnvelope } from "react-icons/fa";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Contato() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [send, setSend] = useState (false)
  

  const sendEmail = (e: React.FormEvent) => {
   
    e.preventDefault();
    if (!form.current) return;

   

    emailjs
      .sendForm(
        `${routes.servico}`,      
        `${routes.template}`,     
        form.current,
        `${routes.key}`          
      )
      .then(
        () => {
          setSent(true);
          setSend(true)
          setTimeout (() => {
            setSend(false)
          },2000)
          form.current?.reset();

        },
        (error) => {
          console.error("Erro ao enviar:", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 h-1/3 resize-none   " id = "contato">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Entre em contato</h2>
      <div className="flex flex-row w-full justify-center items-start gap-16">
        {/* Contact cards will go here */}
        <div className="flex flex-col gap-4 w-1/3 pt-8">
          <article className="flex flex-col items-center  bg-white p-4 rounded-2xl  bg-amber-800 gap-2">
            <FaEnvelope className="text-2xl" />
            <h4 className="font-bold">Email</h4>
            <h5 className="text-sm">placeholder@email.com</h5>
            <a
              href="mailto:placeholder@email.com"
              target="_blank"
              className="text-xs"
            >
              Send a message
            </a>
          </article>
          <article className="flex flex-col items-center  bg-white p-4 rounded-2xl  bg-amber-800 gap-2">
            <BsWhatsapp className="text-2xl" />
            <h4 className="font-bold">WhatsApp</h4>
            <h5 className="text-sm">+1234567890</h5>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              className="text-xs"
            >
              Send a message
            </a>
          </article>
          <article className="flex flex-col items-center  bg-white p-4 rounded-2xl  bg-amber-800 gap-2">
            <BsLinkedin className="text-2xl" />
            <h4 className="font-bold">LinkedIn</h4>
            <h5 className="text-sm">placeholder</h5>
            <a
              href="https://www.linkedin.com/in/placeholder/"
              target="_blank"
              className="text-xs"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-white p-6 rounded-3xl shadow-lg bg-amber-800 w-5/12 items-center justify-center resize-none "
        >
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
            className="w-full mb-4 p-3 border border-gray-300 rounded  resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-4/12 bg-black text-white py-3 hover:bg-gray-800 transition cursor-pointer rounded-3xl mx-auto block
          justify-center items-center flex"
          >
            {!send ? "Enviar mensagem " : <FaCheck size={24} />}
          </button>
          {sent && <p className="text-green-600 mt-4 "></p>}
        </form>
      </div>
    </div>
  );
}
