import boy from "@/assets/boyMeditation.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen min-h-screen h-fit relative flex justify-center items-center bg-custom-blue"
    >
      <div className="container px-6">
        {/* Main */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center mt-20 gap-5">
          {/* Image */}
          <div className="w-full xs:w-5/6 sm:w-3/4 md:w-2/3 xl:w-1/2 2xl:w-2/5">
            <img src={boy.src} className="w-full h-full object-contain" />
          </div>

          {/* Title and text */}
          <div className="w-full xs:w-5/6 lg:w-1/2 2xl:w-1/3 flex flex-col items-center lg:items-start mt-4 lg:mt-20">
            <h1 className="font-semibold text-white text-2xl xs:text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl">
              Un poco más acerca de mi...
            </h1>

            <div className="text-custom-white-rgba6 mt-4 lg:mt-10">
              <p className="mt-6 text-base lg:text-lg">
                Si tuviera que describirme en pocas palabras, diría que soy
                responsable, sensible y creativa. Estas características se
                reflejan no solo en mi forma de trabajar, sino también en mis
                pasiones: el teatro y la psicología.
              </p>
              <p className="mt-6 text-base lg:text-lg">
                Me inspira explorar nuevas culturas, aprender de las diferencias
                y sorprenderme con ideas que desafían lo convencional.
              </p>
              <p className="mt-6 text-base lg:text-lg">
                Creo profundamente en el poder de la autenticidad y la conexión
                para generar cambios significativos en nuestras vidas.
              </p>
            </div>
          </div>
        </div>

        {/* SVG Wave */}
        <div className="wave-2">
          <svg
            data-name="Layer 1"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
