import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import StartApplication from "../components/StartApplication";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Ranking />
      <StartApplication />
    </div>
  );
};

export default Home;
