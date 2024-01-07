'use client'
import React from "react";
import { motion } from "framer-motion";
import Greeting from "../containers/Greeting";
import TechStacks from "../containers/TechStacks";
import OutOfTopicCard from "../containers/OutOfTopicCard";
import Header from "../containers/Header";

const Home = () => {
  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }, 
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto mt-4"
      variants={fadeInAnimation}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <Greeting />
      <TechStacks />
      <OutOfTopicCard />
    </motion.div>
  );
};

export default Home;
