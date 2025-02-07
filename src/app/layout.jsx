import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://luciaindo.com"),
  title: "Lic. Lucía Indo - Psicoterapia",
  description:
    "Lic. Lucía Indo - Psicoterapia - Talleres Psicológicos - Psicología Organizacional",
  openGraph: {
    title: "Lic. Lucía Indo - Psicoterapia",
    description:
      "Lic. Lucía Indo - Psicoterapia - Talleres Psicológicos - Psicología Organizacional",
    url: "https://luciaindo.com",
    siteName: "Lic. Lucía Indo",
    images: [
      {
        url: "/healthcare.png",
        width: 512,
        height: 512,
        alt: "Lic. Lucía Indo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
