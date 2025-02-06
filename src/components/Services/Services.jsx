import flowers from "@/assets/flowers.png";

const Services = () => {
  return (
    <section
      id="services"
      className="w-screen min-h-screen flex justify-center items-center bg-custom-pink"
    >
      <div className="container">
        {/* Título */}
        <h1 className="w-full text-center text-custom-blue font-semibold text-3xl xs:text-3xl md:text-3xl lg:text-4xl 3xl:text-5xl">
          Servicios
        </h1>

        {/* Main */}
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start text-black mt-10 lg:gap-10">
          {/* Listado */}
          <div className="w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 flex flex-col items-center gap-8">
            <div className="w-full px-6 flex gap-2">
              <div className="w-5 h-5 min-w-5 min-h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1 lg:mt-[6px]">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                  Psicoterapia para Adultos (sesiones virtuales)
                </h3>
                <p className="mt-4 text-base lg:text-lg">
                  Ofrezco sesiones de psicoterapia individual diseñadas para
                  acompañarte en la exploración de tus emociones, superar
                  momentos complicados y desarrollar herramientas para una vida
                  más plena y significativa.
                </p>
                <p className="mt-4 text-base lg:text-lg">
                  Trabajo desde un enfoque de sensibilidad al trauma,
                  garantizando un espacio seguro, cálido y libre de juicios,
                  donde puedes hablar con confianza y a tu propio ritmo.
                </p>
              </div>
            </div>
            <div className="w-full px-6 flex gap-2">
              <div className="w-5 h-5 min-w-5 min-h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1 lg:mt-[6px]">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                  Talleres Psicológicos Personalizados
                </h3>
                <p className="mt-4 text-base lg:text-lg">
                  Creo firmemente en la importancia de la salud mental como base
                  para el bienestar individual y colectivo.
                </p>
                <p className="mt-4 text-base lg:text-lg">
                  Ya sea que se trate de técnicas para manejar el estrés,
                  estrategias de comunicación efectiva o prácticas de
                  autocuidado, los talleres están pensados para ser dinámicos,
                  accesibles y sensibles a las características únicas de los
                  participantes.
                </p>
              </div>
            </div>
            <div className="w-full px-6 flex gap-2">
              <div className="w-5 h-5 min-w-5 min-h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1 lg:mt-[6px]">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
                  Psicología Organizacional
                </h3>
                <p className="mt-4 text-base lg:text-lg">
                  El bienestar laboral es clave para el desarrollo y éxito de
                  cualquier empresa.
                </p>
                <p className="mt-4 text-base lg:text-lg">
                  Ofrezco servicios de psicología organizacional que incluyen
                  procesos completos de reclutamiento y selección 360º,
                  evaluaciones de desempeño, diagnósticos organizacionales y
                  planificación estratégica de formaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="w-full md:w-3/4 lg:w-1/2 2xl:w-1/3 px-6 mt-24 sm:mt-28 lg:mt-14 xl:mt-20 2xl:mt-24">
            <div className="bg-white h-fit p-8 rounded-lg z-10 shadow-lg relative">
              <div className="w-3/4 xs:w-3/5 sm:w-1/2 lg:w-3/5 top-[-14%] 3xs:top-[-16%] 2xs:top-[-20%] xs:top-[-25%] sm:top-[-30%] md:top-[-25%] xl:top-[-35%] 2xl:top-[-28%] 3xl:top-[-30%] absolute left-1/2 -translate-x-1/2">
                <img
                  src={flowers.src}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg lg:text-xl mb-5">Sobre mi</h4>
              <p className="text-custom-rgba3 text-base lg:text-lg">
                Soy Licenciada en Psicología, graduada en la Universidad
                Nacional de Mar del Plata.
              </p>
              <p className="text-custom-rgba3 text-base lg:text-lg mt-4">
                Mi formación está orientada hacia la Terapia Cognitivo
                Conductual y la Terapia de Aceptación y Compromiso (ACT),
                enfoques que me permiten trabajar de manera práctica y flexible
                según las necesidades de cada persona.
              </p>
              <p className="text-custom-rgba3 text-base lg:text-lg mt-4">
                Además, tengo un interés especial en brindar tratamientos
                sensibles al trauma, asegurando que cada espacio terapéutico sea
                seguro, respetuoso y empático.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
