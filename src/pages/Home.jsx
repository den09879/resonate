import Contact from "../components/Contact";

const Home = () => {
  
  return (
    <section className="w-full h-screen relative bg-gray-900">
      <div className="max-container bg-gray-900" >
        <h1 className="head-text pb-8 text-white">Contacts</h1>

        <Contact></Contact>
      </div>
    </section>
    
  )
}

export default Home