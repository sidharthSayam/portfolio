import React from "react";
import { motion } from "framer-motion";

function SpecificSkill({ directionLeft, image }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src={image}
        className="rounded-full border border-gray-500 object-cover h-10 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default SpecificSkill;
