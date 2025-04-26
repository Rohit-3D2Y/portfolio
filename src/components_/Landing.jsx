import React from "react";
import BlurText from "../ui/TextAnimations/BlurText/BlurText";
import AnimatedContent from "../ui/Animations/AnimatedContent/AnimatedContent";
const Landing = () => {
  return (
    <div className="p-10 ">
      <div className="flex flex-col items-start">
        <div>
          <img
            src="https://i1.adis.ws/i/canon/get-inspired-black-white-nature-photography-g7-x-mark-iii-2_e6c159b023d1431ea45a2188bab8e37a?$media-collection-full-dt-jpg$"
            alt=""
            className="h-28 w-28 border-2 rounded-full bg-slate-500"
          />
        </div>
        <BlurText
          text="Hey, I'm Rohit Tiwari. Dreamer and Coder
        "
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl mt-4 font-light inria-sans-bold tracking-tighter lg:text-6xl"
        />
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
          <p className="text-md text-left text-gray-600 md:mt-6 inria-sans-regular  lg:text-xl">
            Crafting seamless experiences and bold visuals. High school student
            by day, creative thinker, and aspiring innovator by night.
          </p>
        </AnimatedContent>

        <div className="flex flex-col gap-3 md:gap-4 md:flex-row md:justify-center mt-5 md:items-center">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <button className="bg-slate-800  text-white px-4 py-2 rounded-xl inria-sans-regular">
              Get my Resume
            </button>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl inria-sans-bold flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              AVAILABLE FOR PROJECT
            </button>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Landing;
