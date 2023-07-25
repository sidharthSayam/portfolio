import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import pageInfo from "../json/pageInfo";
import profile from "../assets/profile.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      `Hi! I'm ${pageInfo[0]?.name}`,
      "Eat 😋",
      "Sleep 😪",
      "Code 💻",
      "Repeat 🔁",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      <BackgroundCircles />
      <img
        className="relative mt-9 rounded-full w-32 h-32 mx-auto object-cover"
        src={profile}
        alt="Picture"
      />
      <div className="z-20">
        <h2 className="text-sm text-gray-500 uppercase tracking-[12px] pb-2 pt-2 font-semibold">
          {pageInfo[0]?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3 z-25">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div>
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experiences">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            {" "}
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
