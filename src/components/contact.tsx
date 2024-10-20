import React from "react";
import { VscMail } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-32 container flex justify-center items-center"
      data-aos="flip-up"
    >
      <div className="grid md:cols-2 gap-10">
        <div className="space-y-8 text-center">
          <h2 className="text-5xl">Connect with Me</h2>
          <p className="text-pink-500 text-[20px] pt-4">
            Lets Collaborate send me a message and call
          </p>
          <div className="flex gap-3 items-center justify-center">
            <VscMail size={30} />
            imran2244ansari@gmail.com
          </div>
          <div className="flex gap-3 items-center justify-center">
            <BsTelephone size={30} />
            0316-8909721
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-2 items-center">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="h-[60px] w-[40%] bg-transparent border border-pink-800"
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="h-[60px] w-[40%] bg-transparent border border-pink-800"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <label htmlFor="msg">Message</label>
            <textarea
              className="w-[80%] bg-transparent border border-pink-800"
              id="msg"
              rows={8}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-pink-700 text-white p-2 px-8 transition duration-300 ease-in-out">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
