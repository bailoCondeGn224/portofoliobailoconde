import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PhotoFolio from "../../assets/img/conde.png";
import CV from "../../assets/jobs/bailoConde.pdf";

interface AnimatedCounterProps {
  target: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const duration = 5;
  useEffect(() => {
    const animation = animate(count, target, { duration });
    return animation.stop;
  }, [target, count, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const Section = () => {
  const targetDuration = 5;

  return (
    <div className="py-6 sm:py-8 lg:py-12 xl:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto w-full max-w-screen-2xl">
      <div className="flex flex-col md:flex-row items-center text-white max-md:text-center space-y-8 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-16">
        {/* Partie gauche */}
        <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 lg:space-y-6 max-md:order-2">
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium text-green-400">Développeur logiciel</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">Salut, je suis</p>
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-green-500 leading-tight">
            Bailo Condé
          </p>
          <div className="pt-2 sm:pt-4 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              "En tant que développeur logiciel passionné et expérimenté, je
              suis convaincu que ma capacité à résoudre des problèmes complexes,
              à travailler en collaboration avec des équipes pluridisciplinaires
              et à m'adapter rapidement aux nouvelles technologies fera de moi
              un atout précieux pour votre entreprise."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center pt-4 sm:pt-6 lg:pt-8 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <motion.a
              href={CV}
              download="Bailo_CV.pdf"
              className="flex items-center gap-2 text-green-500 font-bold text-base sm:text-lg lg:text-xl py-2 px-4 sm:py-3 sm:px-6 lg:py-3 lg:px-8 border-2 rounded-full border-green-500"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#22c55e",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Télécharger CV
              <motion.span
                whileHover={{ rotate: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaArrowDown />
              </motion.span>
            </motion.a>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/bailoCondeGn224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 text-green-500 border-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bailo-conde-762330205/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 border-green-500 rounded-full hover:bg-green-500 transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <FaLinkedin className="text-green-500 hover:text-white" />
              </a>

              <a
                href="https://twitter.com/your-twitter-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 border-green-500 rounded-full hover:bg-green-500 transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <IoLogoTwitter className="text-green-500 hover:text-white" />
              </a>

              <a
                href="https://www.facebook.com/mamadoubailo.conde.393"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 lg:p-3.5 border-2 border-green-500 rounded-full hover:bg-green-500 transition-all duration-300 text-lg sm:text-xl lg:text-2xl"
              >
                <SiFacebook className="text-green-500 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Partie droite avec image */}
        <motion.div
          className="w-full md:w-1/2 h-auto flex justify-center items-center p-2 sm:p-3 border-2 sm:border-4 border-green-500 rounded-full max-md:order-1 relative z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: targetDuration, ease: "linear", repeat: 0 }}
        >
          <img
            src={PhotoFolio}
            alt="Bailo Condé"
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full object-cover"
          />
        </motion.div>
      </div>

      {/* Compteurs */}
      <div className="text-white mt-12 sm:mt-16 lg:mt-20 xl:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 text-center">
        <div className="p-2 sm:p-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center text-green-500">
            <AnimatedCounter target={3} />
            <span>+</span>
          </p>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 block">Années d'expérience</span>
        </div>
        <div className="p-2 sm:p-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center text-green-500">
            <AnimatedCounter target={10} />
            <span>+</span>
          </p>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 block">Projets Complets</span>
        </div>
        <div className="p-2 sm:p-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center text-green-500">
            <AnimatedCounter target={7} />
            <span>+</span>
          </p>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 block">Technologies maîtrisées</span>
        </div>
        <div className="p-2 sm:p-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex justify-center items-center text-green-500">
            <AnimatedCounter target={100} />
            <span>+</span>
          </p>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg mt-2 block">Commits de code</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
