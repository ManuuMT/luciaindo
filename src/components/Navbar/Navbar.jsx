"use client";

import logo from "@/assets/logo.png";

const Navbar = () => {
  // * Methods
  const ScrollTo = (id) => {
    window.scrollTo({
      top: document.querySelector(`#${id}`).offsetTop,
      behavior: "smooth",
    });
  };

  // * Render
  return (
    <nav className="fixed z-50 top-0 left-0 w-screen h-16 bg-slate-50 flex items-center justify-center shadow-md">
      <div className="flex justify-between items-center h-full w-full max-w-7xl px-4">
        <div
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="w-64 cursor-pointer"
          style={{ minWidth: 48 }}
        >
          <img
            src={logo.src}
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>
        <ul className="w-fit h-full flex items-center text-sky-950 font-semibold gap-10">
          <li onClick={() => ScrollTo("hero")} className="cursor-pointer">
            Inicio
          </li>
          <li onClick={() => ScrollTo("services")} className="cursor-pointer">
            Servicios
          </li>
          <li onClick={() => ScrollTo("about")} className="cursor-pointer">
            Acerca de mi
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
