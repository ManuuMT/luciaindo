import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lic. Lucía Indo - Psicoterapia",
  description:
    "Lic. Lucía Indo - Psicoterapia - Talleres Psicológicos - Psicología Organizacional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
