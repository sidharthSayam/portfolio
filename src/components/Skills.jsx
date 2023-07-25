import React from "react";
import { motion } from "framer-motion";
import SpecificSkill from "./SpecificSkill";
import css from "../assets/css.png";
import hardhat from "../assets/hardhat.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import metamask from "../assets/metamask.png";
import mongodb from "../assets/mongodb.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import typescript from "../assets/typescript.png";
import vue from "../assets/vue.png";

function Skills() {
  let skills = [
    html,
    css,
    javascript,
    react,
    redux,
    vue,
    typescript,
    nextjs,
    mongodb,
    hardhat,
    metamask,
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex flex-col text-center md:text-left  max-w-[200px] min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute uppercase top-24 text-gray-500 tracking-[12px] text-2xl">
        {" "}
        Skills
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, id) => (
          <SpecificSkill key={id} image={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill, id) => (
          <SpecificSkill key={id} image={skill} directionLeft={true} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
