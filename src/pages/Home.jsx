import Contact from "../components/Contact";
import Fade from "../components/Fade";
import Reveal from "../components/Reveal";

const Home = () => {
  
  return (
    <section className="w-full h-screen relative bg-gray-900">
      <div className="max-container bg-gray-900" >
        <Reveal>
        <h1 className="head-text pb-8 text-white">Contacts</h1>
        </Reveal>
        <Fade>
          <Contact />
        </Fade>
      </div>
    </section>
    
  )
}

export default Home