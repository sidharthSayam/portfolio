import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = ({ socials }) => {
  return (
    <div className="sticky top-0 flex items-start justify-between p-5 max-w-5xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {" "}
          Get in touch
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
