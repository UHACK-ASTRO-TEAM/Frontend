import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import StartApplication from "../components/StartApplication";

import { startApplication } from "../data/application";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Card />
      <Ranking />

      {startApplication.map((item, i) => {
        return <StartApplication item={item} key={i} />;
      })}
    </main>
  );
};

export default Home;
