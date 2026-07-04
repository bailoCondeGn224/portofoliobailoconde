import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", hover = true }) => {
  return (
    <motion.div
      className={`bg-surface border border-border rounded-xl shadow-lg ${
        hover ? "hover:border-brand-500/50 hover:shadow-brand-500/10 transition-all duration-300" : ""
      } ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
