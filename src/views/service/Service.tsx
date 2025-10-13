import React from "react";
import { WiDirectionDownRight } from "react-icons/wi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="text-white mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {[
          {
            id: 1,
            title: "Développeur Frontend",
            description:
              "Compétences solides en développement frontend, avec une maîtrise de technologies modernes telles que React.js, TypeScript, Tailwind CSS, Material UI, HTML, CSS et Bootstrap, permettant de créer des interfaces utilisateur réactives, esthétiques et fonctionnelles.",
          },
          {
            id: 2,
            title: "UI/UX Designer",
            description:
              "Compétences en design UI/UX avec Figma pour le prototypage interactif et Canva pour la création de visuels, permettant de concevoir des interfaces intuitives et esthétiques, centrées sur l'expérience utilisateur.",
          },
          {
            id: 3,
            title: "Développeur Backend",
            description:
              "Expérience en développement backend avec une expertise dans NestJS, Spring Boot et Laravel, garantissant la création d'architectures robustes et performantes pour des applications web et mobiles.",
          },
          {
            id: 4,
            title: "Développeur Mobile",
            description:
              "Compétences en développement mobile avec React Native, permettant de concevoir des applications mobiles performantes et optimisées pour une expérience utilisateur fluide sur les plateformes iOS et Android.",
          },
        ].map((service) => (
          <motion.div
            key={service.id}
            className="shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 bg-gray-800 hover:bg-green-500 transition-all duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-400">{`0${service.id}`}</span>
              <motion.span
                className="bg-white text-black p-2 sm:p-3 rounded-full border-2 border-white"
                whileHover={{ x: 5, rotate: 45 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <WiDirectionDownRight className="text-xl sm:text-2xl lg:text-3xl" />
              </motion.span>
            </div>
            <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold py-2 sm:py-3">{service.title}</h1>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
