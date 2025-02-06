"use client";

import profile from "@/assets/profile.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const mailto =
  "mailto:luciaindo2@gmail.com?subject=Solicitud de entrevista&body=Hola Lucía! Me gustaría agendar un turno con vos para comenzar a hacer terapia...";

const Modal = ({ isOpen, close }) => {
  return (
    <div
      className={`${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      } transition-all duration-700 ease-in-out fixed w-screen h-screen top-0 left-0 z-10 flex justify-center items-center backdrop-blur-[2px] `}
    >
      <div className="container flex justify-center">
        {/* Main */}
        <div className="w-full bg-white rounded-md flex flex-col justify-center items-center relative shadow-lg max-w-[450px] p-4 md:p-8 md:max-w-[550px]">
          {/* Close */}
          <div
            className="absolute flex justify-center items-center right-6 top-4 text-black cursor-pointer font-medium text-sm bg-gray-200 rounded-full w-6 h-6"
            onClick={close}
          >
            X
          </div>

          {/* Content */}
          <div className="w-full flex flex-col mt-2">
            <h3 className="text-black text-base xs:text-lg md:text-xl">
              ¡Ponte en contacto!
            </h3>
            <p className="text-black text-xs xs:text-sm md:text-base mt-2">
              Anímate a comenzar tu proceso de autodescrubimiento de la mano de
              una profesional de la salud mental.
            </p>
            <div className="flex mt-5 gap-10">
              {/* Profile picture */}
              <div className="w-28 md:w-32 lg:w-36 rounded-md overflow-hidden">
                <img
                  src={profile.src}
                  className="w-full h-full object-contain saturate-[1.2]"
                />
              </div>
              {/* Contact data */}
              <div className="flex flex-col justify-center gap-2 md:gap-3 text-xs xs:text-sm md:text-lg">
                <Link
                  href="https://api.whatsapp.com/send?phone=2284218948"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center text-black gap-2">
                    <BsWhatsapp size={18} />
                    <p className="">2284 21 89 48</p>
                  </div>
                </Link>
                <Link
                  href="https://instagram.com/psi.luciaindo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center text-black gap-2">
                    <BsInstagram size={18} />
                    <p className="">psi.luciaindo</p>
                  </div>
                </Link>
                <Link href={mailto}>
                  <div className="flex items-center text-black gap-2">
                    <AiOutlineMail size={18} />
                    <p className="">luciaindo2@gmail.com</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
