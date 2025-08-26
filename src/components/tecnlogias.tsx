"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";



export default function Tecnologias() {
    const [minhasTecnologias, setTecnologias] = useState<string[]>([])

    useEffect(() => {
        fetch("/data/tecnlogias.json")
            .then((res) => res.json())
            .then((data: { tecnologias: string[] }) => {
                setTecnologias(data.tecnologias);
            })
            .catch((err) => console.error("Erro ao carregar JSON:", err));
    }, []);


    return (
        <div className="h-full justify-center flex" id="tecnologias">
            <div className="flex z-0 h-18 w-full sm:w-11/12 md:w-10/12 justify-center flex items-center overflow-hidden pl-3.5 pr-3.5">
                <Swiper
                    spaceBetween={50}
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    pagination={{ clickable: false }}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    freeMode={{ enabled: true }}
                    speed={5000}
                    

                >
                    {minhasTecnologias.map((tec, index) => (
                        <SwiperSlide key={index} className="!w-auto">
                            <div className=" rounded-2xl shadow px-4 py-1 flex justify-center items-center text-sm w-32 h-10
                        shadow-sm mb-2 cursor-pointer border">
                                {tec}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    )

}