import About from "../src/blocks/About";
import Contact from "../src/blocks/Contact";
import Footer from "../src/blocks/Footer";
import Presentation from "../src/blocks/Presentation";
import Projects from "../src/blocks/Projects";
import Service from "../src/blocks/Service";
import Technologies from "../src/blocks/Technologies";
import Navbar from "../src/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
        <Head>
          <title>Portfolio - Guilherme Franco</title>
          <meta name="description" content="Projeto de portfolio com Next.js" />
          <meta charSet="utf-8" />
        </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Orbitron&family=Ubuntu&family=Wavefont:wght@200&display=swap"/>
      

      <Navbar />
      <Presentation />
      <About />
      <Service />
      <Technologies />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}
