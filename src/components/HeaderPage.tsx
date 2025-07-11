import { PiGithubLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";


const decoration = " relative before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-black  before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100";

export default function HeaderPage() {
    return (
 <header
  className="w-8/12 max-w-7xl h-14 px-4 fixed top-3 left-1/2 -translate-x-1/2 z-50
  flex justify-end items-center rounded-full shadow-lg
  bg-white/30 backdrop-blur-md backdrop-saturate-150
  bg-clip-padding overflow-hidden"
>
  <ul className="flex flex-col sm:flex-row gap-4 sm:gap-7 items-center font-bold mr-5 cursor-pointer ">
    <li className= {`${decoration}`} >Sobre mim</li>
    <li className= {`${decoration}`}>Projetos</li>
    <li className= {`${decoration}`}>Tecnologias</li>
    <li className= {`${decoration}`}>Contato</li>
    <a href="https://github.com/R-JAC0BS  " target="_blank">
      <li ><PiGithubLogo size={25} /></li>
    </a>
    <li className= {`${decoration}`}><CiLinkedin size={25} /></li>
  </ul>
</header>
    );
      

}