"use client";

import logo from "@/assets/logo.png";

const items = [
  { id: "1-hero", label: "Inicio", link: "#hero" },
  { id: "2-services", label: "Servicios", link: "#services" },
  { id: "3-about", label: "Sobre mi", link: "#about" },
];

const Navbar = () => {
  // * Methods
  const navigate = (id) => {
    window.scrollTo({
      top: document.querySelector(id).offsetTop,
      behavior: "smooth",
    });
  };

  // * Render
  return (
    <nav className="fixed z-50 top-0 left-0 w-screen h-16 bg-slate-50 flex items-center justify-center shadow-md">
      <div className="flex justify-between items-center h-full w-full max-w-7xl px-4">
        {/* Logo */}
        <div
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="w-32 3xs:w-36 2xs:w-40 xs:w-44 md:w-48 lg:w-52 cursor-pointer"
        >
          <img
            src={logo.src}
            className="w-full h-full object-contain"
            alt="logo"
          />
        </div>

        {/* Items */}
        <ul className="w-fit h-full flex items-center text-sky-950 font-semibold gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(item.link)}
              className="cursor-pointer text-2xs 3xs:text-xs 2xs:text-sm xs:text-base md:text-lg"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
