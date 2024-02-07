import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TEDxCCET",
  description: "Explore ideas worth spreading at TEDxCCET, the official TEDx event hosted by Carmel College of Engineering and Technology in Punnapra, Alappuzha. Join us for an inspiring day of thought-provoking talks, engaging discussions, and innovative ideas. Be part of a community passionate about shaping the future. Discover, connect, and be inspired at TEDxCCET 2024",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" href="/tedx.png" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,800&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
