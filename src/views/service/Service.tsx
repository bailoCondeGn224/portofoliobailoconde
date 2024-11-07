import React from "react";
import { WiDirectionDownRight } from "react-icons/wi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="text-white mx-auto w-full lg:max-w-6xl px-4 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { id: 1, title: "Développeur Frontend" },
          { id: 2, title: "UI/UX Designer" },
          { id: 3, title: "Développeur Backend" },
          { id: 4, title: "Développeur Mobile" },
        ].map((service) => (
          <motion.div
            key={service.id}
            className="shadow-lg rounded-lg p-6 bg-gray-800 hover:bg-green-500 transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-4xl font-bold">{`0${service.id}`}</span>
              <motion.span
                className="bg-white text-black p-2 rounded-full border-2 border-white"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <WiDirectionDownRight className="text-2xl" />
              </motion.span>
            </div>
            <h1 className="text-2xl font-bold py-2">{service.title}</h1>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              officiis illum et quas asperiores deserunt est fuga reprehenderit
              labore nisi, commodi sequi, deleniti delectus totam laboriosam
              magni eveniet dicta in!
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
