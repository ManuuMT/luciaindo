"use client";

import image from "@/assets/selfLove.png";
import Modal from "@/components/Modal/Modal";
import { handleOverflow } from "@/utils/handleOverflow";
import { useState } from "react";

import "./Hero.css";

const Hero = () => {
  // * States
  const [isOpenModal, setIsOpenModal] = useState(false);

  // * Methods
  const openModal = () => {
    setIsOpenModal(true);
    handleOverflow();
  };

  const closeModal = () => {
    setIsOpenModal(false);
    handleOverflow();
  };

  // * Render
  return (
    <section
      className="w-screen min-h-screen flex justify-center items-center bg-slate-50 relative"
      // style={{ height: "calc(100vh + 64px)" }}
      id="hero"
    >
      <div className="container">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 relative z-10">
          {/* Title and CTA */}
          <div className="w-5/6 md:w-1/2 2xl:w-3/4 order-1 md:order-[0]">
            <div className="w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-10">
              <h1 className="w-3/4 2xl:w-1/2 text-2xl xs:text-3xl md:text-3xl lg:text-4xl 3xl:text-5xl text-custom-blue text-center">
                Un espacio seguro para sanar y crecer
              </h1>
              <button
                className="w-full md:w-3/4 2xl:w-1/2 text-sm 3xs:text-base lg:text-lg py-3 xs:py-4 md:py-3 bg-custom-blue text-white"
                onClick={openModal}
              >
                ¡Quiero empezar!
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full md:w-1/2 flex justify-center 2xl:justify-start">
            <div className="w-5/6 xs:w-2/3 md:w-full lg:w-5/6">
              <img src={image.src} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Wave SVG  */}
        <div className="wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>

      <Modal isOpen={isOpenModal} close={closeModal} />
    </section>
  );
};

export default Hero;
