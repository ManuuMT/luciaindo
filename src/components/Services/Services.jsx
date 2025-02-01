import flowers from "@/assets/flowers.png";

const Services = () => {
  return (
    <section
      id="services"
      className="w-screen min-h-screen h-fit relative flex justify-center items-center bg-custom-pink"
    >
      {/* Título */}
      <div className="flex flex-col items-center max-w-7xl mt-20">
        <h1 className="text-custom-blue font-semibold ">Servicios</h1>

        <div className="flex justify-center text-black mt-20 gap-14 lg:flex-col lg:items-center">
          {/* Listado */}
          <ul className="flex flex-col gap-8 w-1/3">
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold">
                  Psicoterapia para Adultos (Sesiones Virtuales)
                </h3>
                <p className="mt-4">
                  Ofrezco sesiones de psicoterapia individual diseñadas para
                  acompañarte en la exploración de tus emociones, superar
                  momentos complicados y desarrollar herramientas para una vida
                  más plena y significativa.
                </p>
                <p className="mt-4">
                  Trabajo desde un enfoque de sensibilidad al trauma,
                  garantizando un espacio seguro, cálido y libre de juicios,
                  donde podés hablar con confianza y a tu propio ritmo.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold">
                  Talleres Psicológicos Personalizados
                </h3>
                <p className="mt-4">
                  Creo firmemente en la importancia de la salud mental como base
                  para el bienestar individual y colectivo.
                </p>
                <p className="mt-4">
                  Ya sea que se trate de técnicas para manejar el estrés,
                  estrategias de comunicación efectiva o prácticas de
                  autocuidado, los talleres están pensados para ser dinámicos,
                  accesibles y sensibles a las características únicas de los
                  participantes.
                </p>
              </div>
            </li>
            <li className="flex gap-2">
              <div>
                <div className="w-5 h-5 rounded-full bg-custom-blue text-white flex items-center justify-center mt-1">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Psicología Organizacional</h3>
                <p className="mt-4">
                  El bienestar laboral es clave para el desarrollo y éxito de
                  cualquier empresa.
                </p>
                <p className="mt-4">
                  Ofrezco servicios de psicología organizacional que incluyen
                  procesos completos de reclutamiento y selección 360º,
                  evaluaciones de desempeño, diagnósticos organizacionales y
                  planificación estratégica de formaciones.
                </p>
              </div>
            </li>
          </ul>

          {/* Card */}
          <div className="md:mt-0 lg:mt-10 w-1/2 flex justify-center items-center">
            <div className="bg-white h-fit w-2/3 p-8 rounded-lg z-10 shadow-lg relative">
              <div className="absolute top-[-150px] left-8 lg:-top-1/3">
                <img
                  src={flowers.src}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="mb-5">Sobre mi</h4>
              <p className="text-custom-rgba3">
                Soy Licenciada en Psicología, graduada en la Universidad
                Nacional de Mar del Plata. Mi formación está orientada hacia la
                Terapia Cognitivo Conductual y la Terapia de Aceptación y
                Compromiso (ACT), enfoques que me permiten trabajar de manera
                práctica y flexible según las necesidades de cada persona.
              </p>
              <p className="text-custom-rgba3 mt-4">
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
