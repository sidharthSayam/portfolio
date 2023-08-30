import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ experience, image }) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={image}
          alt="experience image"
        />

        <div className="px:0 md:px-10">
          <h3 className="text-3xl font-light"> {experience?.jobTitle}</h3>
          <p className="text-xl font-bold mb-1"> {experience?.company}</p>

          {/* Tech Used */}
          {/* <div className="flex">
            {experience?.technologies.map((technology) => (
              <img
                key={technology._id}
                src={urlFor(technology.image).url()}
                width="16px"
                height="16px"
                className="mx-[1px]"
              />
            ))}
          </div> */}

          <p className="uppercase text-gray-500 space-y-2">
            {experience?.dateStarted} -{" "}
            {experience?.isCurrentlyWorkingHere
              ? "Present"
              : experience.dateEnded}
          </p>
          <ul className="list-disc space-y-2 py-2 text-sm ml-5">
            {experience?.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
