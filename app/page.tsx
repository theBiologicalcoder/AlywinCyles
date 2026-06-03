import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Offer from "../components/Offer";
import Reviews from "../components/Reviews";
import Visit from "../components/Visit";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}