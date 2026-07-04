import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`text-xs sm:text-sm bg-surface-hover border border-border text-brand-400 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
