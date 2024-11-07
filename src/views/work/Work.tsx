import { FaGithub } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Feinteingni from "../../assets/jobs/feinteingni.png";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <div className="text-xl text-white mx-auto w-full 2xl:w-7/10 xl:w-4/5 lg:w-9/10">
      <div className="flex items-center justify-between mb-4 gap-2">
        {!isMobile && (
          <motion.button
            onClick={scrollPrev}
            className="border border-gray-500 p-2 rounded-full hover:bg-green-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GrLinkPrevious className="size-8 sm:size-5 md:size-6" />
          </motion.button>
        )}
        <div
          ref={emblaRef}
          className={`${
            isMobile ? "overflow-y-scroll h-[80vh]" : "overflow-hidden"
          }`}
        >
          <div className={`${isMobile ? "block" : "flex"}`}>
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className={`${
                  isMobile ? "w-full mb-6 z-0" : "flex-shrink-0 w-full p-4 z-0"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-center xl:mt-24 lg:mt-24 md:flex-wrap">
                  <div className="w-full md:w-1/2 p-4 md:p-0">
                    <h1 className="text-5xl md:text-7xl">
                      {String(index + 1).padStart(2, "0")}
                    </h1>
                    <p className="text-2xl md:text-4xl py-2 md:py-4 xl:py-8">
                      Frontend Project {index + 1}
                    </p>
                    <p className="text-sm md:text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <span className="flex justify-start items-center gap-1 md:gap-2 py-2 md:py-4 xl:py-8 text-green-500">
                      <p className="text-xs md:text-sm">React js</p>
                      <p className="text-xs md:text-sm">Tailwind css</p>
                    </span>
                    <hr className="border-green-500 my-2 md:my-4" />
                    <div className="flex space-x-2 md:space-x-4 mt-2 py-2 md:py-4">
                      <motion.button
                        className="border border-gray-500 p-1 md:p-2 rounded-full hover:bg-green-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-lg md:text-2xl" />
                      </motion.button>
                      <motion.button
                        className="border border-gray-500 p-1 md:p-2 rounded-full hover:bg-green-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <GrLinkNext className="text-lg md:text-2xl" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
                    <motion.img
                      src={Feinteingni}
                      alt={`projet Frontend Project ${index + 1}`}
                      className="max-w-full h-auto"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
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
            className="border border-gray-500 p-2 rounded-full hover:bg-green-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GrLinkNext className="size-8 sm:size-5 md:size-6" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Work;
