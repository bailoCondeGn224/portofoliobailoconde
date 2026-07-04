import { FaCode, FaPaintBrush, FaServer, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import SectionHeading from "../../components/ui/SectionHeading";

const services = [
  {
    id: 1,
    title: "Développeur Frontend",
    icon: FaCode,
    description:
      "Compétences solides en développement frontend, avec une maîtrise de technologies modernes telles que React.js, TypeScript, Tailwind CSS, Material UI, HTML, CSS et Bootstrap, permettant de créer des interfaces utilisateur réactives, esthétiques et fonctionnelles.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    icon: FaPaintBrush,
    description:
      "Compétences en design UI/UX avec Figma pour le prototypage interactif et Canva pour la création de visuels, permettant de concevoir des interfaces intuitives et esthétiques, centrées sur l'expérience utilisateur.",
  },
  {
    id: 3,
    title: "Développeur Backend",
    icon: FaServer,
    description:
      "Expérience en développement backend avec une expertise dans NestJS, Spring Boot et Laravel, garantissant la création d'architectures robustes et performantes pour des applications web et mobiles.",
  },
  {
    id: 4,
    title: "Développeur Mobile",
    icon: FaMobileAlt,
    description:
      "Compétences en développement mobile avec React Native, permettant de concevoir des applications mobiles performantes et optimisées pour une expérience utilisateur fluide sur les plateformes iOS et Android.",
  },
];

const Service = () => {
  return (
    <Container className="py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-center">
      <SectionHeading
        eyebrow="Ce que je propose"
        title="Mes services"
        align="center"
        className="mx-auto"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service) => (
          <Card key={service.id} className="p-4 sm:p-6 lg:p-8 text-text-primary">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-500/30 font-display">{`0${service.id}`}</span>
              <motion.span
                className="bg-surface-hover text-brand-500 border border-border p-2.5 sm:p-3 rounded-full"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <service.icon className="text-lg sm:text-xl lg:text-2xl" />
              </motion.span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold py-2 sm:py-3 font-display">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-text-muted">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Service;
