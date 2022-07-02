import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ToolList from "./ToolList";
const Toolbox = ({ title, rowID }) => {
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
  return (
    <>
      <div className=" border-b border-gray-700">
        <div className="flex flex-row">
          <h2 className="text-stone-100 uppercase font-bold md:text-xl p-2 hover:text-stone-200 transition-colors ease-linear">
            {title}
          </h2>
        </div>

        <div className="relative flex items-center group lg:w-10/12 w-full mx-auto ">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
            size={40}
          />

          <ul
            id={"slider" + rowID}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex flex-row gap-0 
          text-stone-200 text-sm bg-black mb-2"
          >
            <ToolList />
          </ul>

          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Toolbox;
