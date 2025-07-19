"use client";

import { PiGithubLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useState } from "react";


const decoration = " relative before:absolute before:bottom-0 font before:left-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-black  before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100";

export default function HeaderPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect (() => {
    const changeWitdh  = () => {
      setScreenWidth (window.innerWidth)
    }

    window.addEventListener('resize', changeWitdh)
     return () => {
      window.removeEventListener('resize', changeWitdh);
    };

  },[])

  const isNotMobile = screenWidth <= 768;


 return (
  <>
    {!isNotMobile ? (
      <header
        className="w-8/12 max-w-7xl h-14 px-4 fixed top-3 left-1/2 -translate-x-1/2 z-40
                   flex justify-end items-center rounded-full shadow-sm
                   bg-white/50 backdrop-blur-xl backdrop-saturate-200
                   border border-white/10 text-black
                   bg-clip-padding overflow-hidden"
        id="header"
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center font-bold mr-5 cursor-pointer">
          <li>
            <Link className={decoration} href="#sobre">Sobre mim</Link>
          </li>
          <li>
            <Link className={decoration} href="#projetos">Projetos</Link>
          </li>
          <li>
            <Link className={decoration} href="#tecnologias">Tecnologias</Link>
          </li>
          <li>
            <Link className={decoration} href="#contato">Contato</Link>
          </li>
          <li>
            <a href="https://github.com/R-JAC0BS" target="_blank" rel="noopener noreferrer">
              <PiGithubLogo size={25} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roberto-jacobs-a620302b3" target="_blank" rel="noopener noreferrer">
              <CiLinkedin size={25} />
            </a>
          </li>
        </ul>
      </header>
    ) : (
      <></>
    )}
  </>
);
   

}