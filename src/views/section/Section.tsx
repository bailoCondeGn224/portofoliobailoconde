import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PhotoFolio from "../../assets/img/conde.png";
import CV from "../../assets/jobs/bailoConde.pdf";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

interface AnimatedCounterProps {
  target: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const duration = 2;
  useEffect(() => {
    const animation = animate(count, target, { duration });
    return animation.stop;
  }, [target, count, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  { target: 3, label: "Années d'expérience" },
  { target: 10, label: "Projets Complets" },
  { target: 7, label: "Technologies maîtrisées" },
  { target: 100, label: "Commits de code" },
];

const Section = () => {
  return (
    <Container className="py-10 sm:py-14 lg:py-20 xl:py-24">
      <div className="flex flex-col md:flex-row items-center text-text-primary max-md:text-center space-y-8 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-16">
        {/* Partie gauche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6 max-md:order-2"
        >
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-400 bg-surface border border-border rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            Disponible pour de nouvelles opportunités
          </span>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-brand-400 font-display">
            Développeur logiciel
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight font-display">
            Salut, je suis
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight font-display bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
            Bailo Condé
          </p>
          <div className="pt-2 sm:pt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-text-muted">
            <p>
              "En tant que développeur logiciel passionné et expérimenté, je
              suis convaincu que ma capacité à résoudre des problèmes complexes,
              à travailler en collaboration avec des équipes pluridisciplinaires
              et à m'adapter rapidement aux nouvelles technologies fera de moi
              un atout précieux pour votre entreprise."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center pt-4 sm:pt-6 lg:pt-8 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <Button href={CV} download="Bailo_CV.pdf" variant="outline">
              Télécharger CV
              <motion.span
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaArrowDown />
              </motion.span>
            </Button>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/bailoCondeGn224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 text-brand-500 border-brand-500 rounded-full hover:bg-brand-500 hover:text-black transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bailo-conde-762330205/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 border-brand-500 rounded-full hover:bg-brand-500 hover:text-black transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <FaLinkedin className="text-brand-500 hover:text-black" />
              </a>

              <a
                href="https://www.facebook.com/mamadoubailo.conde.393"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 border-brand-500 rounded-full hover:bg-brand-500 hover:text-black transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <SiFacebook className="text-brand-500 hover:text-black" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Partie droite avec image */}
        <div className="w-full md:w-1/2 flex justify-center items-center max-md:order-1 relative">
          <motion.div
            className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-[22rem] xl:h-[22rem] rounded-full border-2 border-dashed border-brand-500/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-2 sm:p-3 rounded-full bg-gradient-to-br from-brand-500/30 to-transparent"
          >
            <img
              src={PhotoFolio}
              alt="Bailo Condé"
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full object-cover border-2 border-brand-500/60"
            />
          </motion.div>
        </div>
      </div>

      {/* Compteurs */}
      <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4 sm:p-6 text-center">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex justify-center items-center text-brand-500 font-display">
              <AnimatedCounter target={stat.target} />
              <span>+</span>
            </p>
            <span className="text-xs sm:text-sm md:text-base text-text-muted mt-2 block">
              {stat.label}
            </span>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Section;
