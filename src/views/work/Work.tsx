import { FaGithub } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";
import Feinteingni from "../../assets/jobs/feinteingni.png";
import Dirga from "../../assets/jobs/dirga.png";
import Interet from "../../assets/jobs/interet.png";
import WalliPaie from "../../assets/jobs/walli paie.png";
import Walli from "../../assets/jobs/walli.png";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import SectionHeading from "../../components/ui/SectionHeading";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Walli Paie",
    description: "Plateforme de paiement en masse pour les entreprises. Solution de digitalisation des transactions visant à réduire l'usage de liquidité en Guinée.",
    technologies: ["NestJS", "React", "TypeScript", "PostgreSQL", "Docker"],
    image: WalliPaie,
  },
  {
    id: 2,
    title: "Walli Paie Back Office",
    description: "Interface d'administration pour la gestion de la plateforme Walli Paie. Permet la gestion des entreprises, des transactions et des utilisateurs.",
    technologies: ["React", "NestJS", "TypeScript", "Tailwind CSS", "Material UI"],
    image: Walli,
  },
  {
    id: 3,
    title: "DIRGA - CNPS",
    description: "Application gouvernementale pour la gestion de l'immatriculation et du recouvrement administratif à la Caisse Nationale de Prévoyance Sociale.",
    technologies: ["React", "NestJS", "Docker", "TypeScript", "PostgreSQL"],
    image: Dirga,
  },
  {
    id: 4,
    title: "Déclaration d'Intérêt - Orange",
    description: "Application permettant aux employés d'Orange de déclarer leurs biens et entreprises. Déployée dans 5 pays (Guinée, Mali, Sénégal, Sierra Leone, Guinée-Bissau).",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Spring Boot"],
    image: Interet,
  },
  {
    id: 5,
    title: "Feinteingni",
    description: "Application de gestion de collecte des ordures développée pour Orange Guinée dans le cadre d'un projet de digitalisation des services municipaux.",
    technologies: ["React", "NestJS", "Tailwind CSS", "Material UI"],
    image: Feinteingni,
  },
];

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    slidesToScroll: 1,
  });

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <SectionHeading eyebrow="Portfolio" title="Mes réalisations" />
      <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8 gap-2 sm:gap-3 lg:gap-4">
        {!isMobile && (
          <motion.button
            onClick={scrollPrev}
            className="border border-border p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-brand-500 hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GrLinkPrevious className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </motion.button>
        )}
        <div
          ref={emblaRef}
          className={`${
            isMobile ? "overflow-y-scroll h-[80vh]" : "overflow-hidden"
          }`}
        >
          <div className={`${isMobile ? "block" : "flex"}`}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${
                  isMobile ? "w-full mb-6 z-0" : "flex-shrink-0 w-full p-4 z-0"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                  <div className="w-full md:w-[48%] lg:w-[47%] space-y-2 sm:space-y-3 lg:space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-500/30 font-display">
                      {String(index + 1).padStart(2, "0")}
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-text-primary font-display">
                      {project.title}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed text-text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-start items-center gap-2 py-2 sm:py-3 lg:py-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <hr className="border-border my-2 sm:my-3 lg:my-4" />
                    <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mt-2 py-2 sm:py-3">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-border p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full hover:bg-brand-500 hover:text-black"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                        </motion.a>
                      )}
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-border p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-full hover:bg-brand-500 hover:text-black"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CiGlobe className="text-base sm:text-lg md:text-xl lg:text-2xl" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-[48%] lg:w-[47%] flex justify-center items-center">
                    <motion.img
                      src={project.image}
                      alt={`Projet ${project.title}`}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-border"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {!isMobile && (
          <motion.button
            onClick={scrollNext}
            className="border border-border p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-brand-500 hover:text-black transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GrLinkNext className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </motion.button>
        )}
      </div>
      {!isMobile && (
        <div className="flex justify-center gap-2 mt-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Aller au projet ${project.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "w-6 bg-brand-500" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Work;
