import Leaderboard from "../components/Carousel_Custom";
import Events from "../components/Events";
import Navbars from "../components/Navbars";
import Landing from "./landing/page"
import About from '../app/about-us/page'
import Footer from "../components/ui/Footer";
import HodSay from "../components/HodSay";
import IOCSay from "../components/IOCSays";
export default function Home() {
  return (
    <>
<Navbars/>
      <Landing/>
      <Events/>
      <About/>
      <HodSay/>
      <IOCSay/>
      <Leaderboard/>
      <Footer/>
    </>

  );
}
