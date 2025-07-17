import { PiGithubLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";


const decoration = " relative before:absolute before:bottom-0 font before:left-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-black  before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100";

export default function HeaderPage() {
  return (
    <header
      className="w-8/12 max-w-7xl h-14 px-4 fixed top-3 left-1/2 -translate-x-1/2 z-40
  flex justify-end items-center rounded-full shadow-sm
  bg-white/50 backdrop-blur-xl backdrop-saturate-200
  border border-white/10 text-black
  bg-clip-padding overflow-hidden"
      id="header"
    >

      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center font-bold mr-5 cursor-pointer ">

        <Link className={`${decoration}`} href="#sobre" >Sobre mim</Link>
        <Link className={`${decoration}`} href="#projetos" >Projetos</Link>
        <Link className={`${decoration}`} href="#tecnologias" >Tecnologias</Link>
        <Link className={`${decoration}`} href="#contato" >Contato</Link>
        <a href="https://github.com/R-JAC0BS  " target="_blank">
          <li ><PiGithubLogo size={25} /></li>
        </a>
        <li className={`${decoration}`}><CiLinkedin size={25} /></li>
      </ul>
    </header>
  );


}