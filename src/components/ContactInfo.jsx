import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function ContactInfo() {
  return (
    <div className="h-screen relative flex flex-col justify-evenly items-center text-center md:flex-row max-w-7xl px-10 mx-auto">
      <h3 className="absolute uppercase top-20 text-gray-500 tracking-[12px] text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="underline text-semibold text-3xl decoration-[#f7ab0a]/50">
          Lets Chat
        </h4>

        <div className="space-y-2">
          <div className="flex items-center space-x-5 justify-center">
            <FiPhoneCall className="text-3xl text-[#f7ab0a] animate-pulse" />
            <p className="text-xl">+91-9471114111</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <FaRegEnvelope className="text-3xl text-[#f7ab0a] animate-pulse" />
            <p className="text-xl">sidharthsayam.321@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MdLocationPin className="text-3xl text-[#f7ab0a] animate-pulse" />
            <p className="text-xl">Ranchi, Jharkhand</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactInfo;
