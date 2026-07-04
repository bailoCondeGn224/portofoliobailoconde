import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaTools, FaUserAlt } from "react-icons/fa";
import ReactImg from "../../assets/techno/reactjs.png";
import NestjsImg from "../../assets/techno/nestjs.png";
import SpringbootImg from "../../assets/techno/springboot.png";
import JavaImg from "../../assets/techno/java.png";
import PhpImg from "../../assets/techno/php.png";
import JavaScriptImg from "../../assets/techno/javascrip.png";
import GithubImg from "../../assets/techno/github.png";
import LaravelImg from "../../assets/techno/laravel.png";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

type Tab = "experience" | "education" | "skills" | "about";

const tabs: { id: Tab; label: string; icon: typeof FaBriefcase }[] = [
  { id: "experience", label: "Expérience", icon: FaBriefcase },
  { id: "education", label: "Éducation", icon: FaGraduationCap },
  { id: "skills", label: "Compétences", icon: FaTools },
  { id: "about", label: "À propos de moi", icon: FaUserAlt },
];

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

const experiences = [
  {
    period: "Mars 2024 - Présent",
    role: "Développeur Fullstack",
    org: "Caisse Nationale de Prévoyance Sociale (CNPS)",
    items: [
      "Participation à plusieurs projets gouvernementaux digitaux",
      "DIRGA : Gestion de l'immatriculation et du recouvrement administratif",
      "Branche Maladie : Gestion des actes médicaux et prestataires",
    ],
    tech: "Docker, React, NestJS, TypeScript, PostgreSQL",
  },
  {
    period: "2024 - Présent",
    role: "Entrepreneur & Développeur Fullstack",
    org: "Walli Paie & Walli Paie Express",
    items: [
      "Plateforme de paiement en masse pour les entreprises",
      "Application mobile pour réduire l'usage de liquidité en Guinée",
      "Déjà utilisée par plusieurs entreprises",
    ],
    tech: "NestJS, React, TypeScript, Flutter, Docker",
  },
  {
    period: "Octobre 2024 - Novembre 2024",
    role: "Développeur Frontend",
    org: "Orange Guinée - Digital Studio",
    items: [
      "Projet Déclaration d'Intérêt pour les employés d'Orange",
      "Déploiement multi-pays (Guinée, Mali, Sénégal, Sierra Leone, Guinée-Bissau)",
    ],
    tech: "React.js, Tailwind CSS, TypeScript, Spring Boot",
  },
  {
    period: "Février 2024 - Juillet 2024",
    role: "Développeur Frontend (Stage)",
    org: "Orange Guinée - Digital Studio",
    items: [
      "Feinteingni : Application de gestion de collecte des ordures",
      "Orange Jobs : Plateforme de recrutement",
      "Walli Transport : Projet personnel développé parallèlement",
    ],
    tech: "React.js, NestJS, Tailwind CSS, Material UI",
  },
];

const education = [
  {
    period: "2018 - 2021",
    role: "Licence en Informatique Fondamentale",
    org: "Université de Labé",
    items: [
      "Études axées sur le développement logiciel et les bases de données",
      "Projets de fin d'études sur le développement d'applications web",
    ],
  },
  {
    period: "En cours depuis 2024",
    role: "Formation en Développement Mobile Flutter",
    org: "Projet Walli Paie Express",
    items: [
      "Développement d'applications mobiles avec Flutter",
      "Application concrète sur un projet réel",
    ],
  },
  {
    period: "Août 2024 - Présent",
    role: "Formation en Anglais",
    org: "Preply",
    items: ["Formation continue en anglais", "Niveau débutant"],
  },
  {
    period: "Labé",
    role: "Certificat en Anglais Débutant",
    org: "CELPS",
    items: ["Certification en langue anglaise"],
  },
];

interface TimelineCardProps {
  period: string;
  role: string;
  org: string;
  items: string[];
  tech?: string;
}

const TimelineCard = ({ period, role, org, items, tech }: TimelineCardProps) => (
  <Card className="p-4 sm:p-5 lg:p-6 border-l-4 border-l-brand-500">
    <p className="text-xs sm:text-sm text-text-muted mb-2">{period}</p>
    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-brand-500 mb-2 font-display">
      {role}
    </h3>
    <ul className="text-text-muted space-y-1 text-xs sm:text-sm lg:text-base">
      <li className="font-semibold text-text-primary text-sm sm:text-base">{org}</li>
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
      {tech && <li className="text-xs italic mt-2">Technologies : {tech}</li>}
    </ul>
  </Card>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-text-primary font-display">
              Mes Expériences
            </h2>
            <p className="text-text-muted mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
              Voici un aperçu de mes expériences professionnelles avec
              différentes missions et responsabilités.
            </p>
            <div className="overflow-y-auto max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pr-1">
              {experiences.map((exp) => (
                <TimelineCard key={exp.role} {...exp} />
              ))}
            </div>
          </motion.div>
        );
      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-text-primary font-display">
              Mon Éducation
            </h2>
            <p className="text-text-muted mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
              Détails sur mon parcours académique, mes diplômes et les
              formations suivies.
            </p>
            <div className="overflow-y-auto max-h-[400px] sm:max-h-[450px] lg:max-h-[500px] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pr-1">
              {education.map((edu) => (
                <TimelineCard key={edu.role} {...edu} />
              ))}
            </div>
          </motion.div>
        );
      case "skills":
        return (
          <motion.div
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-text-primary font-display">
              Mes Compétences
            </h2>
            <p className="text-text-muted mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base leading-relaxed">
              Compétences professionnelles et techniques acquises au fil des
              années.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {technologies.map((tech) => (
                <Card key={tech.name} className="p-4 flex flex-col items-center">
                  <img src={tech.img} alt={tech.name} className="h-14 w-14 sm:h-16 sm:w-16 mb-2 object-contain" />
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-brand-500">
                    {tech.name}
                  </h3>
                </Card>
              ))}
            </div>
          </motion.div>
        );
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-text-primary font-display">
              À propos de moi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              <Card className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-brand-500 mb-2 font-display">
                  Informations Personnelles
                </h3>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Nom:</strong> Bailo Conde
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Expérience:</strong> 3 ans+
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Nationalité:</strong> Guinéen
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Freelance:</strong> Disponible
                </p>
              </Card>

              <Card className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-brand-500 mb-2 font-display">
                  Informations de Contact
                </h3>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Téléphone:</strong> 613134885
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Email:</strong> bailoconde623@gmail.com
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Adresse:</strong> Conakry, Ratoma, Cosa
                </p>
                <p className="text-text-muted text-sm sm:text-base">
                  <strong className="text-text-primary">Langues:</strong> Français, Anglais débutant
                </p>
              </Card>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Container className="py-12 sm:py-16 lg:py-20 xl:py-24 text-text-primary">
      <div className="flex gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start max-md:flex-col">
        <Card className="w-full md:w-1/3 p-4 sm:p-6 lg:p-8" hover={false}>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center font-display">
            Pourquoi m'engager ?
          </h1>
          <p className="text-text-muted mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed">
            Développeur fullstack passionné, fort d'une expérience solide en conception d'applications web et mobiles.
            Motivé par la création de solutions utiles et performantes, je combine rigueur technique et esprit entrepreneurial.
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 cursor-pointer p-3 sm:p-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-brand-500 text-black shadow-lg"
                      : "bg-surface-hover hover:bg-brand-500 hover:text-black"
                  }`}
                >
                  <tab.icon />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </Card>
        <div className="w-full md:w-2/3">{renderContent()}</div>
      </div>
    </Container>
  );
};

export default Resume;
