import React from "react";
import HeroSlider from "../components/home/HeroSlider";
import PopularSkill from "../components/home/PopularSkill";
import { useLoaderData } from "react-router";
import TopProviders from "../components/home/TopProviders";
import HowItWorks from "../components/home/HowItWork";
import UserStories from "../components/home/UserStories";

const Home = () => {
  const skills = useLoaderData();

  return (
    <div>
      <header>
        <HeroSlider></HeroSlider>
      </header>

      <main>
        <PopularSkill skills={skills}></PopularSkill>
        <TopProviders></TopProviders>
        <HowItWorks></HowItWorks>
        <UserStories></UserStories>
      </main>
    </div>
  );
};

export default Home;
