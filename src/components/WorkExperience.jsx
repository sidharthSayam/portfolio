import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import experiences from "../json/experience";
import recipeat from "../assets/recipeat.png";
import avid from "../assets/avid.png";
import viseven from "../assets/viseven.png";
import codingHustle from "../assets/codinghustle.jpg";

function WorkExperience() {
  const images = [recipeat, viseven, codingHustle, avid];
  console.log(experiences);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className=" relative h-screen flex flex-col justify-evenly items-center overflow-hidden text-lft max-w-full md:flex-row px-10 mx-auto "
    >
      <h3 className="absolute text-2xl top-24 uppercase tracking-[6px] text-gray-500">
        {" "}
        Experience
      </h3>

      <div className="w-full space-x-5 flex overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp._id} experience={exp} image={images[idx]} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
