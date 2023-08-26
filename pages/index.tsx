import About from "../src/blocks/About";
import Presentation from "../src/blocks/Presentation";
import Service from "../src/blocks/Service";
import Technologies from "../src/blocks/Technologies";
import Navbar from "../src/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
   
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Orbitron&family=Ubuntu&family=Wavefont:wght@200&display=swap"
          
        />
      

      <Navbar />
      <Presentation />
      <About />
      <Service />
      <Technologies />
    </div>
  );
}
