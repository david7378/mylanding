import React from "react";
import sideImg from "../../assets/sideim.webp";
import { MdQueryStats } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
const AboutMe = () => {
  return (
    <>
      <section class="text-gray-200 body-font" id="aboutme">
        <h1 className="text-xl font-black uppercase pl-2 mt-10 text-center py-4">
          About me
        </h1>
        <div class="container px-5 py-8 mx-auto flex flex-wrap items-center border border-gray-700">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden hidden sm:block lg:block">
            <div className="absolute w-full h-[880px] bg-gradient-to-r from-black/50"></div>
            <img
              alt="feature"
              class="object-cover object-center h-[880px] w-full"
              src={sideImg}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800 mb-5">
                <GrTechnology className="h-6 w-6" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-400 text-lg title-font font-medium mb-3">
                  Amante de la tecnología
                </h2>
                <p class="leading-relaxed text-base">
                  Siempre buscando nuevos desafíos, utilizando nuevas técnicas,
                  tecnologías y actualizandome constantemente, con el fin de
                  ayudar a crear un mundo mejor a traves del desarrollo.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-slate-800 mb-5">
                <RiTeamFill className="h-6 w-6" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-400 text-lg title-font font-medium mb-3">
                  Trabajo en equipo
                </h2>
                <p class="leading-relaxed text-base">
                  Considero que un grupo de personas alineadas con los mismos
                  intereses, estos cumplen con los objetivos eficientemente,
                  entre otros beneficios como la innovación.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-900 mb-5">
                <BsFillPersonPlusFill className="h-6 w-6" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-400 text-lg title-font font-medium mb-3">
                  Aplicado
                </h2>
                <p class="leading-relaxed text-base">
                  Poseo el hábito de adquirir conocimientos diariamente y de
                  práctica constante lo que me permite expeditar el cumplimiento
                  de objetivos.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-900 mb-5">
                <MdQueryStats className="h-6 w-6" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-400 text-lg title-font font-medium mb-3">
                  Orientación a resultados
                </h2>
                <p class="leading-relaxed text-base">
                  Tengo la capacidad de cumplir mis metas, adaptandome en todo
                  los escenarios posibles como multitarea y/o bajo presión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
