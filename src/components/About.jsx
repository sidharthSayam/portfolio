import React from "react";
import { motion } from "framer-motion";
import pageInfo from "../json/pageInfo";

function About() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-evenly md:flex-row md:text-left max-w-7xl px-10 mx-auto">
      <h1 className="absolute text-gray-500 tracking-[20px] top-24 uppercase text-4xl">
        About
      </h1>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="max-w-5xl text-2xl">{pageInfo[0]?.backgroundInformation}</p>
      </motion.div>
    </div>
  );
}

export default About;
