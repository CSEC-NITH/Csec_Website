
"use client"
import Navbar from "./comp/Navbar";
import CodeArena from "./comp/CodeArena";
import AboutCompetition from "./comp/aboutCA";
import Sponsors from "./comp/sponsors";
import Footer from "./comp/ui/Footer";
import PrizePool from "./comp/PrizePool";
import Countdown from "./comp/Countdown";
import Timeline from "./comp/timeline";
import QueryForm from "./comp/queryform";
export default function Home() {
  return (
    <>
    <Navbar/>
      <CodeArena/>
      <Countdown/>
      <AboutCompetition/>
      <PrizePool/>
      <Timeline/>
      <Sponsors/>
      <QueryForm/>
      <Footer/>
    </>

  );
}

