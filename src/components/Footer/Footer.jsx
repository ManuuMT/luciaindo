import Link from "next/link";

const url = "https://manumaldonado.netlify.app/";

const Footer = () => {
  return (
    <footer className="w-screen bg-white flex justify-center">
      <div className="container">
        <div className="w-full py-2 flex justify-center items-center text-xs md:text-sm lg:text-base">
          <div className="text-black text-center">
            Lic. Lucía Indo © 2025 - Sitio web creado con
            <span className="text-red-500"> ♥ </span> por{" "}
            <Link href={url} target="_blank" rel="noreferrer">
              Manu Maldonado
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
