  import type { Metadata } from "next";
  import {Roboto, Playwrite_NG_Modern, Open_Sans} from "next/font/google"

  import "./globals.css";
  import Header from "@/components/Header";
import Footer from "@/components/Footer";

  const roboto = Roboto({
    subsets : ["latin"],
    variable : "--font-roboto"
  
  })
  const norge = Playwrite_NG_Modern({
    variable: "--font-norge"
  

  })
  const openSans = Open_Sans({
    variable : "--font-openSans"

  })



  export const metadata: Metadata = {
    title: "ElitePudseren",
    description: "Elitepudseren, din lokale vinduespudser i byen",
    
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="da" className={`${roboto.variable} ${norge.variable} ${openSans.variable}`}>
        <body>
          <Header></Header>
          <main>
          {children}
          </main>
          <Footer></Footer>
        </body>
      </html>
    );
  }
