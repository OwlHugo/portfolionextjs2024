import React from "react";
import BioCard from "../../components/BioCard";
import { outOfTopic } from "../../portfolio";

export default function OutOfTopicCard() {
  return (
    <div>
      <BioCard title={outOfTopic.title} bio={outOfTopic.bio} />
    </div>
  );
};

