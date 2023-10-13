import React from "react";
import Navbar from "../All/Navbar";
import LatestJobs from "../All/LatestJobs";
import Hero from "../All/Hero/Hero";


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestJobs/>
    </div>
  );
}

export default Home;
