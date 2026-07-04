import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

type Variant = "primary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-black hover:bg-brand-600 border-2 border-brand-500",
  outline:
    "text-brand-500 border-2 border-brand-500 hover:bg-brand-500 hover:text-black",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base lg:text-lg py-2.5 px-5 sm:py-3 sm:px-6 lg:py-3 lg:px-8 rounded-full transition-colors duration-300";

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

interface ButtonAsLink extends CommonProps {
  to: string;
  href?: never;
  type?: never;
  download?: never;
  onClick?: () => void;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
  to?: never;
  type?: never;
  download?: string;
  target?: string;
  rel?: string;
  onClick?: never;
}

interface ButtonAsButton extends CommonProps {
  type: "submit" | "button";
  to?: never;
  href?: never;
  download?: never;
  onClick?: () => void;
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 200 },
  };

  if ("to" in props && props.to) {
    return (
      <MotionLink to={props.to} onClick={props.onClick} className={classes} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  if ("href" in props && props.href) {
    const { href, download, target, rel } = props;
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  const { type, onClick } = props as ButtonAsButton;
  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default Button;
