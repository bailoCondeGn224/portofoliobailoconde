import { useState } from "react";
import ReactImg from "../../assets/techno/reactjs.png";
import NestjsImg from "../../assets/techno/nestjs.png";
import SpringbootImg from "../../assets/techno/springboot.png";
import JavaImg from "../../assets/techno/java.png";
import PhpImg from "../../assets/techno/php.png";
import JavaScriptImg from "../../assets/techno/javascrip.png";
import GithubImg from "../../assets/techno/github.png";
import LaravelImg from "../../assets/techno/laravel.png";
import { motion } from "framer-motion";
const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const technologies = [
    { name: "React", img: ReactImg },
    { name: "NestJS", img: NestjsImg },
    { name: "Spring Boot", img: SpringbootImg },
    { name: "Java", img: JavaImg },
    { name: "PHP", img: PhpImg },
    { name: "JavaScript", img: JavaScriptImg },
    { name: "GitHub", img: GithubImg },
    { name: "Laravel", img: LaravelImg },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-white">
              Mes Expériences
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
              Voici un aperçu de mes expériences professionnelles avec
              différentes missions et responsabilités.
            </p>
            <div className="overflow-y-auto h-[300px] sm:h-[350px] lg:h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Mars 2024 - Présent</p>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-500 mb-2">
                  Développeur Fullstack
                </h3>
                <ul className="text-gray-300 space-y-1 text-xs sm:text-sm lg:text-base">
                  <li className="font-semibold text-sm sm:text-base">Caisse Nationale de Prévoyance Sociale (CNPS)</li>
                  <li>• Participation à plusieurs projets gouvernementaux digitaux</li>
                  <li>• DIRGA : Gestion de l'immatriculation et du recouvrement administratif</li>
                  <li>• Branche Maladie : Gestion des actes médicaux et prestataires</li>
                  <li className="text-xs italic mt-2">Technologies : Docker, React, NestJS, TypeScript, PostgreSQL</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">2024 - Présent</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Entrepreneur & Développeur Fullstack
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Walli Paie & Walli Paie Express</li>
                  <li>• Plateforme de paiement en masse pour les entreprises</li>
                  <li>• Application mobile pour réduire l'usage de liquidité en Guinée</li>
                  <li>• Déjà utilisée par plusieurs entreprises</li>
                  <li className="text-sm italic">Technologies : NestJS, React, TypeScript, Flutter, Docker</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">Octobre 2024 - Novembre 2024</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Frontend
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Orange Guinée - Digital Studio</li>
                  <li>• Projet Déclaration d'Intérêt pour les employés d'Orange</li>
                  <li>• Déploiement multi-pays (Guinée, Mali, Sénégal, Sierra Leone, Guinée-Bissau)</li>
                  <li className="text-sm italic">Technologies : React.js, Tailwind CSS, TypeScript, Spring Boot</li>
                </ul>
              </div>

              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">Février 2024 - Juillet 2024</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Frontend (Stage)
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Orange Guinée - Digital Studio</li>
                  <li>• Feinteingni : Application de gestion de collecte des ordures</li>
                  <li>• Orange Jobs : Plateforme de recrutement</li>
                  <li>• Walli Transport : Projet personnel développé parallèlement</li>
                  <li className="text-sm italic">Technologies : React.js, NestJS, Tailwind CSS, Material UI</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-semibold mb-4 text-white">
              Mon Éducation
            </h2>
            <p className="text-gray-300 mb-4">
              Détails sur mon parcours académique, mes diplômes et les
              formations suivies.
            </p>
            <div className="overflow-y-auto h-[350px] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Université */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">2018 - 2021</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Licence en Informatique Fondamentale
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Université de Labé</li>
                  <li>• Études axées sur le développement logiciel et les bases de données</li>
                  <li>• Projets de fin d'études sur le développement d'applications web</li>
                </ul>
              </div>

              {/* Formation Flutter */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">En cours depuis 2024</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Formation en Développement Mobile Flutter
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Projet Walli Paie Express</li>
                  <li>• Développement d'applications mobiles avec Flutter</li>
                  <li>• Application concrète sur un projet réel</li>
                </ul>
              </div>

              {/* Formation Anglais */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">Août 2024 - Présent</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Formation en Anglais
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">Preply</li>
                  <li>• Formation continue en anglais</li>
                  <li>• Niveau débutant</li>
                </ul>
              </div>

              {/* Certification CELPS */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-400 mb-2">Labé</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Certificat en Anglais Débutant
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li className="font-semibold">CELPS</li>
                  <li>• Certification en langue anglaise</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case "skills":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-semibold mb-4 text-white">
              Mes Compétences
            </h2>
            <p className="text-gray-300 mb-4">
              Compétences professionnelles et techniques acquises au fil des
              années.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg flex flex-col items-center shadow-md"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-16 w-16 mb-2"
                  />
                  <h3 className="text-lg font-semibold text-green-500">
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-semibold mb-4 text-white">
              À propos de moi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Première carte avec les informations personnelles */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Informations Personnelles
                </h3>
                <p className="text-gray-300">
                  <strong>Nom:</strong> Bailo Conde
                </p>
                <p className="text-gray-300">
                  <strong>Expérience:</strong> 3 ans+
                </p>
                <p className="text-gray-300">
                  <strong>Nationalité:</strong> Guinéen
                </p>
                <p className="text-gray-300">
                  <strong>Freelance:</strong> Disponible
                </p>
              </div>

              {/* Deuxième carte avec les informations de contact */}
              <div className="bg-gray-700 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Informations de Contact
                </h3>
                <p className="text-gray-300">
                  <strong>Téléphone:</strong> 613134885
                </p>
                <p className="text-gray-300">
                  <strong>Email:</strong> bailoconde623@gmail.com
                </p>
                <p className="text-gray-300">
                  <strong>Adresse:</strong> Conakry, Ratoma, Cosa
                </p>
                <p className="text-gray-300">
                  <strong>Langues:</strong> Français, Anglais débutant
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl text-white px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start max-md:flex-col">
        <div className="w-full md:w-1/3 p-4 sm:p-6 lg:p-8 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
            Pourquoi m'engager ?
          </h1>
          <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed">
            Développeur fullstack passionné, fort d'une expérience solide en conception d'applications web et mobiles.
            Motivé par la création de solutions utiles et performantes, je combine rigueur technique et esprit entrepreneurial.
          </p>
          <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
            <li
              onClick={() => setActiveTab("experience")}
              className={`cursor-pointer p-3 sm:p-4 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600"
              } hover:bg-green-500 hover:shadow-lg`}
            >
              Expérience
            </li>
            <li
              onClick={() => setActiveTab("education")}
              className={`cursor-pointer p-3 sm:p-4 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600"
              } hover:bg-green-500 hover:shadow-lg`}
            >
              Éducation
            </li>
            <li
              onClick={() => setActiveTab("skills")}
              className={`cursor-pointer p-3 sm:p-4 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg transition-all duration-300 ${
                activeTab === "skills"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600"
              } hover:bg-green-500 hover:shadow-lg`}
            >
              Compétences
            </li>
            <li
              onClick={() => setActiveTab("about")}
              className={`cursor-pointer p-3 sm:p-4 text-sm sm:text-base lg:text-lg xl:text-xl rounded-lg transition-all duration-300 ${
                activeTab === "about"
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600"
              } hover:bg-green-500 hover:shadow-lg`}
            >
              À propos de moi
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/3">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Resume;
