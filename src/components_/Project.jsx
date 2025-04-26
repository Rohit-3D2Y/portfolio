import React from "react";
import Integrations from "../utils/Integations";

const tools = [
  {
    name: "Figma",
    icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084384/project1_seaukl.jpg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084383/project2_cal8sc.jpg",
    description: "Notion is an all-in-one workspace for notes and tasks.",
  },
  {
    name: "Slack",
    icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project3_wqxkey.jpg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084383/project4_fbhw8g.jpg",
    description: "Relume is a no-code website builder and design tool.",
  },
];

const Project = () => {
  return (
    <div className=" py-8 overflow-hidden">
      <div className="w-full">
        <Integrations data={tools} />
      </div>
    </div>
  );
};

export default Project;