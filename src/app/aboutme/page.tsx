'use client'
import React from "react";
import Greeting from "../../containers/Greeting";
import TechStacks from "../../containers/TechStacks";
import OutOfTopicCard from "../../containers/OutOfTopicCard";
import Header from "../../containers/Header";


const Main = () => {
  return (
    <div className="w-full max-w-7xl mx-auto about-me-container">
      <Header/>
      <Greeting />
      <TechStacks />
      <OutOfTopicCard />
    </div >
  )
}
export default Main;