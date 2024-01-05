'use client'
import React from "react";
import Greeting from "../../containers/Greeting";
import TechStacks from "../../containers/TechStacks";
import OutOfTopicCard from "../../containers/OutOfTopicCard";
import { useSpring, animated, config } from "react-spring";

const Main = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: "translate3d(0, 100px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)" },
    config: config.default,
  });

  return (
    <animated.div style={{ ...animation }} className="w-full max-w-7xl mx-auto">
      <Greeting />
      <TechStacks />
      <OutOfTopicCard />
    </animated.div >
  )
}
export default Main;