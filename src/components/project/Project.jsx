const Project = ({ project }) => {
  const { image, name, description, link } = project;

  // Limitamos el largo del string para que ocupe menos espacio en pantalla si supera cierta cantidad de caracteres.
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const openPage = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div
        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
        onClick={() => openPage(link)}
      >
        <img className="w-full h-auto block rounded-xl" src={image} alt="a" />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-colors ease-linear">
          <p className="white-space-normal text-xs md:text-base uppercase font-semibold flex justify-center items-center h-full text-center">
            {truncateString(description, 30)}
          </p>
        </div>
        <span className="justify-end text-stone-200 font-light">
          {" "}
          {truncateString(name, 30)}{" "}
        </span>
      </div>
    </>
  );
};

export default Project;
