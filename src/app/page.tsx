
import Navigation from "./components/navbar";
import Hero1 from "./components/hero1";
import Hero3 from "./components/hero3";
import Hero4 from "./components/hero4";
import Hero5 from "./components/hero5";
import Hero6 from "./components/hero6";
import Footer from "./components/footer";
import CategoryLinks from "./components/hero2";


export default function Home() {
  return (
    <>
    <Navigation/>
    <Hero1/>
    <CategoryLinks/>
    <Hero3/>
    <Hero4/>
    <Hero5/>
    <Hero6/>
    <Footer/>

    </>
  )
}