import React from "react";
import { WiDirectionDownRight } from "react-icons/wi";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="text-white mx-auto w-full lg:max-w-6xl px-4 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <p className="text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
