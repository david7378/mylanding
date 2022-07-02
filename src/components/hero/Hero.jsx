import React from "react";
import { MdWavingHand } from "react-icons/md";
import hero from "../../assets/hero.webp";
const Hero = () => {
  return (
    <div className="w-full h-[550px] text-stone-200">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={hero}
          alt="Profile Image"
          loading="lazy"
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <div className="flex flex-row gap-4 just items-center ">
            <h1 className="text-2xl sm:text-xl md:text-5xl font-bold  hover:text-stone-400 transition-colors ease-linear">
              Hola! Soy David Perdomo
            </h1>
            <i>
              <MdWavingHand size={45} className="text-gray-200" />
            </i>
          </div>

          <div className="my-4">
            <p>
              Un desarrollador frontend, apasionado por crear soluciones
              principalmente utilizando la tecnología ReactJs.
            </p>
          </div>
          <p className="text-gray-400 text-sm">About me: </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            Me considero una persona que disfruta de trabajar en equipo, con
            capacidad de concentración por largos períodos, me gusta enfrentarme
            a nuevos desafíos y aprender de ellos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
