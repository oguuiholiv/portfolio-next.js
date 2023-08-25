import About from "../src/blocks/About";
import Presentation from "../src/blocks/Presentation";
import Service from "../src/blocks/Service";
import Navbar from "../src/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <About />
      <Service />
    </div>
  )
}
