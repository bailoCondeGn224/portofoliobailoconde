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
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-4xl font-semibold mb-4 text-white">
              Mes Expériences
            </h2>
            <p className="text-gray-300 mb-6">
              Voici un aperçu de mes expériences professionnelles avec
              différentes missions et responsabilités.
            </p>
            <div className=" overflow-y-auto h-[350px] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2022 - Présent</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Full Stack
                </h3>
                <ul className="text-gray-300">
                  <li>Tulip Industrie</li>
                  <li>
                    Développement d'applications web en JavaScript et React
                  </li>
                  <li>
                    Intégration avec des services backend en utilisant Nest js
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2021 - 2022</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Frontend
                </h3>
                <ul className="text-gray-300">
                  <li>Orange Guinee</li>
                  <li>
                    Création d'interfaces utilisateur modernes avec React et
                    TypeScript
                  </li>
                  <li>
                    Collaboration avec les équipes de design pour améliorer l'UX
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2020 - 2021</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Backend
                </h3>
                <ul className="text-gray-300">
                  <li>ABC Technologies</li>
                  <li>
                    Développement de services RESTful avec Node.js et Express
                  </li>
                  <li>
                    Gestion de bases de données et optimisation des requêtes SQL
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2020 - 2021</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Backend
                </h3>
                <ul className="text-gray-300">
                  <li>ABC Technologies</li>
                  <li>
                    Développement de services RESTful avec Node.js et Express
                  </li>
                  <li>
                    Gestion de bases de données et optimisation des requêtes SQL
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2020 - 2021</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Backend
                </h3>
                <ul className="text-gray-300">
                  <li>ABC Technologies</li>
                  <li>
                    Développement de services RESTful avec Node.js et Express
                  </li>
                  <li>
                    Gestion de bases de données et optimisation des requêtes SQL
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2020 - 2021</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Développeur Backend
                </h3>
                <ul className="text-gray-300">
                  <li>ABC Technologies</li>
                  <li>
                    Développement de services RESTful avec Node.js et Express
                  </li>
                  <li>
                    Gestion de bases de données et optimisation des requêtes SQL
                  </li>
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
              {/* Parcours secondaire */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2015 - 2018</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Baccalauréat en Sciences
                </h3>
                <ul className="text-gray-300">
                  <li>Lycée de Conakry</li>
                  <li>
                    Formation générale avec des matières en mathématiques et
                    sciences
                  </li>
                </ul>
              </div>

              {/* Université */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2019 - 2022</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Licence en Informatique
                </h3>
                <ul className="text-gray-300">
                  <li>Université Gamal Abdel Nasser de Conakry</li>
                  <li>
                    Études axées sur le développement logiciel et les bases de
                    données
                  </li>
                  <li>
                    Projets de fin d'études sur le développement d'applications
                    web
                  </li>
                </ul>
              </div>

              {/* Formations en ligne */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2022 - Présent</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Formations en Ligne
                </h3>
                <ul className="text-gray-300">
                  <li>Udemy : Développement Web Complet</li>
                  <li>Coursera : Spécialisation en Machine Learning</li>
                  <li>Codecademy : Apprendre React et Node.js</li>
                </ul>
              </div>

              {/* Formation additionnelle */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-sm text-gray-400 mb-2">2023 - Présent</p>
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Certification en Développement Full Stack
                </h3>
                <ul className="text-gray-300">
                  <li>OpenClassrooms</li>
                  <li>Formation intensive sur les technologies web modernes</li>
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
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-500 mb-2">
                  Informations Personnelles
                </h3>
                <p className="text-gray-300">
                  <strong>Nom:</strong> Bailo Conde
                </p>
                <p className="text-gray-300">
                  <strong>Expérience:</strong> 2 ans+
                </p>
                <p className="text-gray-300">
                  <strong>Nationalité:</strong> Guinéen
                </p>
                <p className="text-gray-300">
                  <strong>Freelance:</strong> Disponible
                </p>
              </div>

              {/* Deuxième carte avec les informations de contact */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
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
    <div className="mx-auto w-full text-white p-2 2xl:w-7/10 xl:w-4/5 lg:w-9/10 lg:mt-32">
      <div className="flex gap-6 items-start max-md:flex-col max-md:w-full">
        <div className="w-full max-md:w-full md:w-1/3 p-4 md:p-6 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
            Pourquoi m'engager ?
          </h1>
          <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur sapiente possimus beatae quia, quasi accusamus
            voluptate debitis minima maiores alias.
          </p>
          <ul className="space-y-2 md:space-y-4">
            <li
              onClick={() => setActiveTab("experience")}
              className={`cursor-pointer p-2 text-sm md:text-lg rounded-lg ${
                activeTab === "experience"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700"
              } hover:bg-green-500`}
            >
              Expérience
            </li>
            <li
              onClick={() => setActiveTab("education")}
              className={`cursor-pointer p-2 text-sm md:text-lg rounded-lg ${
                activeTab === "education"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700"
              } hover:bg-green-500`}
            >
              Éducation
            </li>
            <li
              onClick={() => setActiveTab("skills")}
              className={`cursor-pointer p-2 text-sm md:text-lg rounded-lg ${
                activeTab === "skills"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700"
              } hover:bg-green-500`}
            >
              Compétences
            </li>
            <li
              onClick={() => setActiveTab("about")}
              className={`cursor-pointer p-2 text-sm md:text-lg rounded-lg ${
                activeTab === "about"
                  ? "bg-green-500 text-white"
                  : "bg-gray-700"
              } hover:bg-green-500`}
            >
              À propos de moi
            </li>
          </ul>
        </div>
        <div className="w-full max-md:w-full md:w-2/3">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Resume;
