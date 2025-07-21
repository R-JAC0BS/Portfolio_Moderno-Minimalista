import { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  tecnologias?: string[];
  description?: string;
  image?: string;
  link?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  tecnologias,
  description,
  image,
  link
}: ModalProps) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    if (isOpen) {
      setVisible(true);
      // pequeno delay para disparar a animação
      setTimeout(() => setAnimate(true), 10);
      document.body.style.overflow = "hidden";
      document.getElementById("header")?.classList.add("hidden");


    } else {
      setAnimate(false);
      setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = "";
      document.getElementById("header")?.classList.remove("hidden");

    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`z-50 fixed inset-0 flex w-full h-full justify-center items-center backdrop-blur-sm  bg-opacity-30 p-3 transition-opacity duration-300 ${animate ? "opacity-100" : "opacity-0"
        }`}
    >
      <div
        className={`bg-white w-3/5 h-12/12 rounded-2xl shadow-lg flex flex-col p-5
          transform transition-transform duration-300
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end items-end ">
          <button onClick={onClose}>
            <IoCloseCircleOutline
              size={30}
              color="bg-gray-800"
              className="cursor-pointer"
            />
          </button>
        </div>

        <div className="w-full h-4/6 flex justify-center items-center p-5 pl-5 pr-5">
          <div className="relative w-full h-full rounded-2xl shadow-lg">
            <Image
              src={image || "/default.jpg"}
              alt="Modal Image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="pl-5 max-h-28 ">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">{title}</h1>
          <p className={`max-h-17 break-words overflow-auto`}>{description}</p>

          <ul className="flex gap-5 mt-2">
            {tecnologias?.map((tec, index) => (
              <li
                key={index}
                className="bg-gray-200 rounded-2xl shadow px-4 py-1 flex justify-center items-center text-sm"
              >
                {tec}
              </li>
            ))}
          </ul>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-black text-white rounded-2xl px-5 py-3 shadow-lg mt-3 hover:bg-gray-800 transition w-48 justify-between"
          >
            Ver no GitHub <CiShare1 size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
