import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl mb-8 sm:mb-10 lg:mb-12 ${className}`}
    >
      {eyebrow && (
        <span className="block text-brand-500 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary leading-tight">
        {title}
        <span className={`block h-1 w-16 rounded-full bg-brand-500 mt-3 sm:mt-4 ${align === "center" ? "mx-auto" : ""}`} />
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-text-muted text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
