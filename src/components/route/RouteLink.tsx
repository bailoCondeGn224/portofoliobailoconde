import React from "react";

export interface Link {
  id: number;
  text: string;
  link?: string;
  icon?: React.ReactNode;
  children?: Link[];
}

export const linksRouter: Link[] = [
  {
    id: 1,
    text: "Accueil",
    link: "/",
  },
  {
    id: 2,
    text: "Service",
    link: "/service",
  },
  {
    id: 3,
    text: "Mon CV",
    link: "/resume",
  },
  {
    id: 4,
    text: "Travail",
    link: "/travail",
  },

  {
    id: 5,
    text: "Contact",
    link: "/contact",
  },
];
