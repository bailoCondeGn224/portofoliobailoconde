import { IoCall, IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="text-base text-white mx-auto w-full 2xl:w-7/10 xl:w-4/5 lg:w-9/10 px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:mt-24 lg:mt-20 md:mt-16 space-y-8 xl:space-y-0 md:flex-wrap">
        {/* Section Formulaire de Contact */}
        <motion.div
          className="w-full xl:w-1/2 bg-gray-700 border border-gray-700 p-6 sm:p-8 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Travaillons ensemble
          </h1>
          <p className="mb-6 text-sm sm:text-base leading-relaxed">
            Vous avez un projet en tête et souhaitez le concrétiser ? Avec une
            expertise en développement d'applications, je vous accompagne à
            chaque étape pour créer des solutions innovantes et adaptées à vos
            besoins. Que ce soit pour une application mobile, une plateforme web
            ou une interface utilisateur, je mets mon savoir-faire à votre
            service pour réaliser vos idées. N'attendez plus pour donner vie à
            vos projets, contactez-moi dès aujourd'hui et transformons ensemble
            vos idées en réalité !
          </p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Prénom"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-500 bg-gray-800 text-white text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-500 bg-gray-800 text-white text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-500 bg-gray-800 text-white text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full p-2 sm:p-3 rounded-md border border-gray-500 bg-gray-800 text-white text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                className="w-full p-2 sm:p-3 h-32 rounded-md border border-gray-500 bg-gray-800 text-white text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 sm:p-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm sm:text-base"
            >
              Envoyer message
            </button>
          </form>
        </motion.div>

        {/* Section Informations de Contact */}
        <motion.div
          className="w-full xl:w-1/2 flex flex-col items-start space-y-6 p-6 sm:p-8 rounded-lg"
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
              className="flex items-center space-x-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <Icon className="text-green-500 bg-gray-700 p-2 sm:p-3 rounded-full border border-gray-700 text-4xl sm:text-5xl" />
              <p className="text-sm sm:text-[18px] hover:text-green-500">
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
