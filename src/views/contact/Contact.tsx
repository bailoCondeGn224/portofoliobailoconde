import { IoCall, IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="text-white mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="flex flex-col xl:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {/* Section Formulaire de Contact */}
        <motion.div
          className="w-full xl:w-1/2 bg-gray-700 border border-gray-700 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Travaillons ensemble
          </h1>
          <p className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Vous avez un projet en tête et souhaitez le concrétiser ? Avec une
            expertise en développement d'applications, je vous accompagne à
            chaque étape pour créer des solutions innovantes et adaptées à vos
            besoins. Que ce soit pour une application mobile, une plateforme web
            ou une interface utilisateur, je mets mon savoir-faire à votre
            service pour réaliser vos idées. N'attendez plus pour donner vie à
            vos projets, contactez-moi dès aujourd'hui et transformons ensemble
            vos idées en réalité !
          </p>

          <form className="space-y-3 sm:space-y-4 lg:space-y-5">
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-5">
              <input
                type="text"
                placeholder="Prénom"
                className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-gray-500 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:border-green-500 focus:outline-none transition-colors"
              />
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-gray-500 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-gray-500 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:border-green-500 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-gray-500 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 h-28 sm:h-32 md:h-36 lg:h-40 rounded-md border border-gray-500 bg-gray-800 text-white text-xs sm:text-sm md:text-base lg:text-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 bg-green-600 text-white rounded-md hover:bg-green-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
            >
              Envoyer message
            </button>
          </form>
        </motion.div>

        {/* Section Informations de Contact */}
        <motion.div
          className="w-full xl:w-1/2 flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { Icon: IoCall, text: "(+224) 613-134-885" },
            { Icon: IoMailSharp, text: "bailoconde623@gmail.com" },
            { Icon: FaLocationDot, text: "Cosa, Conakry, Guinée" },
            { Icon: FaLinkedinIn, text: "linkedin profil" },
          ].map(({ Icon, text }, index) => (
            <motion.div
              key={text}
              className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <Icon className="text-green-500 bg-gray-700 p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border border-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl group-hover:bg-green-500 group-hover:text-white transition-colors duration-200" />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl group-hover:text-green-500 transition-colors duration-200">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
