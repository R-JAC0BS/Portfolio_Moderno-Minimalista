import HeaderPage from "@/components/HeaderPage";
import MarginComponent from "@/components/MarginComponent";
import Projects from "@/components/projects";
import About from "@/components/About";
import Tecnologias from "@/components/tecnlogias";
import Contato from "@/components/contato"
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <div className="flex flex-col pt-20 bg-gray-100 min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HeaderPage />
      <MarginComponent />
      <About />
      <Projects />
      <Tecnologias/>
      <Contato/>
      <BackToTopButton />
    </div>
  );
}