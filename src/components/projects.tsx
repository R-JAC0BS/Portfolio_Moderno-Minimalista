"use client";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import Modal from '@/components/modal'
import "swiper/css"; // necessário para funcionar corretamente

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    tecnologias: string[];
    link: string;
  };
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectProject, setSelectProject] = useState<Project>();


  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data: { Projects: Project[] }) => {
        setProjects(data.Projects);
      })
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div className="w-8/12 max-w-7xl mx-auto mt-10 inline 
     w-full  pb-5 " id = "projetos">
      <div className = "flex align-middle justify-between" >
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Projetos</h1>
        <FaArrowRightArrowLeft size = {30}/>
      </div>
      

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title={selectProject?.title}
          description={selectProject?.description} tecnologias={selectProject?.details.tecnologias}
          image={selectProject?.image} link = {selectProject?.details.link}
        ></Modal>
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="">
            <div className="bg-white  rounded-xl  w-min-h-96 mb-1 hover:transition-transform ease-in-out rounded-xl
            hover:scale-100 duration-300 cursor-grab shadow-lg p-2">
              <div></div> 
              <div className="w-full h-72 inset-shadow-inherit rounded-xl">
                <img src={project.image } alt="Imagem Do projeto aqui" className="w-full h-full bg-cover rounded-xl"></img>
              </div>
              <div className="mt-3 font-bold text-gray-800 m-3">{project.title}</div>
              <div className="mt-3 text-gray-800 m-3">{project.description.slice(0,100)}...</div>

              <div className=" w-full justify-between flex p-3  ">
                <button className=" cursor-pointer text-white bg-gray-800 rounded-full w-2/5 h-10 "
                  onClick={() => {
                    setOpenModal(true);
                    setSelectProject(project)
                  }} >Detalhes</button>
                <button className=" cursor-pointer text-black border   rounded-full w-2/5 h-10"> <a href={project.details.link} target="_blank">Github</a></button>

              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

