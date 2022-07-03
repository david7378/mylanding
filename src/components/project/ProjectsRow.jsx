import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import presup from "../../assets/presup.webp";
import myaccountImage from "../../assets/myaccount.webp";
import healthImage from "../../assets/health.webp";
import turn from "../../assets/turn.webp";
import moviecenter from "../../assets/moviecenter.webp";
import cinema from "../../assets/cinema.webp";
import fastfood from "../../assets/fastfood.webp";
import Project from "./Project";

const ProjectsRow = ({ title, rowID }) => {
  // Avanzamos en la fila a la izquierda 500px
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // Avanzamos en la fila a la derecha 500px
  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const projects = [
    {
      id: 1,
      name: "Turnero",
      image: turn,
      description: "Turnero local",
      link: "https://bucolic-gaufre-4c70e0.netlify.app/",
    },
    {
      id: 2,
      name: "Tu cuenta",
      image: myaccountImage,
      description: "Controla tus finanzas",
      link: "https://reverent-ritchie-ee8a98.netlify.app/",
    },

    {
      id: 3,
      name: "Centro de peliculas",
      image: moviecenter,
      description: "Buscador y organizador de peliculas",
      link: "https://lustrous-cassata-889342.netlify.app/",
    },
    {
      id: 4,
      name: "FastFood",
      image: fastfood,
      description: "Busca y ordena tu comida favorita",
      link: "https://deft-kleicha-cbb823.netlify.app/",
    },
    {
      id: 5,
      name: "Gran Cine",
      image: cinema,
      description: "Buscador y filtra las mejores peliculas al estilo netflix.",
      link: "https://beamish-bonbon-fa1399.netlify.app/",
    },

    {
      id: 6,
      name: "Presupuestos",
      image: presup,
      description: "Realiza tus gatos a partir de un monto dado",
      link: "https://friendly-shannon-7b2dca.netlify.app/",
    },
    {
      id: 7,
      name: "Salud",
      image: healthImage,
      description: "Busca articulos de salud",
      link: "https://next-salud.vercel.app/",
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-5">
        <h2 className="text-stone-100 uppercase font-bold md:text-xl p-4 hover:text-stone-200 transition-colors ease-linear">
          {title}
        </h2>
      </div>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default ProjectsRow;
