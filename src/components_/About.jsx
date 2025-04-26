import React from "react";
import AnimatedContent from "../ui/Animations/AnimatedContent/AnimatedContent";
const About = () => {
  return (
    <div className="px-10">
      <div className="flex flex-col gap-5">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <h1 className="inria-sans-bold text-4xl tracking-tighter">About</h1>
          <p className="text-md mt-5 inria-sans-bold text-gray-500 ">
            I’m Rohit Tiwari, a curious Founder, coder, and storyteller.
            Currently a student at St John Engineering College, but always
            exploring the limitless possibilities of creativity and technology.
          </p>
          <p className="text-md mt-5 inria-sans-bold text-gray-500">
            I thrive on transforming ideas into reality, whether it's crafting
            digital interfaces, designing immersive visuals, or building
            websites that feel effortless to use.
          </p>
        </AnimatedContent>
      </div>
      <div className="mt-10 flex justify-center group relative">
        <div className="h-[150px] w-[180px] bg-white border-2 rounded-lg transform transition-all duration-300 ease-in-out group-hover:-rotate-6 group-hover:-translate-x-2 group-hover:-translate-y-2 -rotate-12 translate-x-5 z-0 p-2 shadow-xl">
          <div className=" w-full h-full">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
          <p className="text-[8px] inria-sans-regular-italic mt-2">Some of my recent photos</p>
          </div>
          
        </div>
        <div className="h-[150px] w-[180px] bg-white  border-2 rounded-lg transform transition-all duration-300 ease-in-out group-hover:rotate-12 group-hover:-translate-x-8 group-hover:translate-y-2 rotate-6 -translate-x-12 translate-y-5 z-10 p-2 shadow-xl">
          <div className="w-full h-full">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" alt="" />
            <p className="text-[8px] inria-sans-regular-italic mt-2">Some of my recent photos</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
