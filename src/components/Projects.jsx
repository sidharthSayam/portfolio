import React from "react";
import { motion } from "framer-motion";
import projects from "../json/projects";
import wordle from "../assets/wordle.png";
import netflix from "../assets/netflix.png";
import hacker_news from "../assets/hacker_news.png";

function Projects() {
  const images = [hacker_news, wordle, netflix];
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full mx-auto items-center justify-evenly z-0"
    >
      <h3 className="absolute uppercase top-24 text-gray-500 tracking-[12px] text-2xl">
        {" "}
        Projects
      </h3>
      <div className="relative w-full h-[100vh] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 xl:p-80 h-screen"
          >
            <img
              className="max-w-[200px]"
              src={images[i]}
              alt={project?.title}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-3xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#f7ab0a]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex justify-between">
              <a target="_blank" className="underline uppercase transition-all ease-in-out duration-250 hover:text-[#f7ab0a]" href={project.linkToBuild}>
                live project
              </a>
              <a target="_blank" className="underline uppercase hover:text-[#f7ab0a] " href={project.linkToGithub} >
                github
              </a>
              </div>
              
              <p className="text-center">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
