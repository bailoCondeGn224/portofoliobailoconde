import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiFacebook } from "react-icons/si";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PhotoFolio from "../../assets/img/conde.png";

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
    <div className="py-3 mx-auto w-full 2xl:w-7/10 xl:w-4/5 lg:w-9/10  xl:mt-10 2xl:mt-16">
      <div className="flex flex-col md:flex-row items-center text-white max-md:text-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Partie gauche */}
        <div className="w-full md:w-1/2 p-4 space-y-4 max-md:order-2">
          <p className="text-lg md:text-xl">Développeur logiciel</p>
          <p className="text-4xl md:text-6xl font-bold">Salut, je suis</p>
          <p className="text-4xl md:text-6xl font-bold text-green-500">
            Bailo Condé
          </p>
          <div className="mt-4 md:mt-6 text-sm md:text-base leading-relaxed">
            <p>
              "En tant que développeur logiciel passionné et expérimenté, je
              suis convaincu que ma capacité à résoudre des problèmes complexes,
              à travailler en collaboration avec des équipes pluridisciplinaires
              et à m'adapter rapidement aux nouvelles technologies fera de moi
              un atout précieux pour votre entreprise."
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <motion.button
              className="flex items-center text-green-500 font-bold text-lg p-2 border rounded-full border-green-500"
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
            </motion.button>
            <div className="flex space-x-4">
              <button className="p-2 border-2 text-green-500 border-green-500 rounded-full hover:bg-white transition-colors">
                <FaGithub />
              </button>
              <button className="p-2 border-2 border-green-500 rounded-full hover:bg-white transition-colors">
                <FaLinkedin className="text-green-500" />
              </button>
              <button className="p-2 border-2 border-green-500 rounded-full hover:bg-white transition-colors">
                <IoLogoTwitter className="text-green-500" />
              </button>
              <button className="p-2 border-2 border-green-500 rounded-full hover:bg-white transition-colors">
                <SiFacebook className="text-green-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Partie droite avec image */}
        <motion.div
          className="w-full md:w-1/2 h-auto flex justify-center items-center p-2 border-2 border-green-500 rounded-full max-md:order-1 relative z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: targetDuration, ease: "linear" }}
        >
          <img
            src={PhotoFolio}
            alt="Bailo Condé"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full"
          />
        </motion.div>
      </div>

      {/* Compteurs */}
      <div className="text-white mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-md:mt-2">
        <div>
          <p className="text-2xl md:text-6xl font-bold flex justify-center items-center ">
            <AnimatedCounter target={3} />
          </p>
          <span className="text-sm md:text-base">Année d'expérience</span>
        </div>
        <div>
          <p className="text-2xl md:text-6xl font-bold flex justify-center items-center">
            <AnimatedCounter target={10} />
          </p>
          <span className="text-sm md:text-base">Projets Complets</span>
        </div>
        <div>
          <p className="text-2xl md:text-6xl font-bold flex justify-center items-center">
            <AnimatedCounter target={7} />
          </p>
          <span className="text-sm md:text-base">Technologies maîtrisées</span>
        </div>
        <div>
          <p className="text-2xl md:text-6xl font-bold flex justify-center items-center">
            <AnimatedCounter target={100} />
          </p>
          <span className="text-sm md:text-base">Commits de code</span>
        </div>
      </div>
    </div>
  );
};

export default Section;
