import { useState } from "react";
import { IoCall, IoMailSharp } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const CONTACT_EMAIL = "bailoconde623@gmail.com";

const contactItems = [
  { Icon: IoCall, text: "(+224) 613-134-885", href: "tel:+224613134885" },
  { Icon: IoMailSharp, text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  {
    Icon: FaLocationDot,
    text: "Cosa, Conakry, Guinée",
    href: "https://www.google.com/maps/search/?api=1&query=Cosa%2C+Conakry%2C+Guin%C3%A9e",
  },
  {
    Icon: FaLinkedinIn,
    text: "Profil LinkedIn",
    href: "https://www.linkedin.com/in/bailo-conde-762330205/",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio - ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Nom: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nTéléphone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Container className="py-12 sm:py-16 lg:py-20 xl:py-24 text-text-primary">
      <div className="flex flex-col xl:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
        {/* Section Formulaire de Contact */}
        <motion.div
          className="w-full xl:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-4 sm:p-6 md:p-8 lg:p-10" hover={false}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 font-display">
              Travaillons ensemble
            </h1>
            <p className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-text-muted">
              Vous avez un projet en tête et souhaitez le concrétiser ? Avec une
              expertise en développement d'applications, je vous accompagne à
              chaque étape pour créer des solutions innovantes et adaptées à vos
              besoins. Que ce soit pour une application mobile, une plateforme web
              ou une interface utilisateur, je mets mon savoir-faire à votre
              service pour réaliser vos idées. N'attendez plus pour donner vie à
              vos projets, contactez-moi dès aujourd'hui et transformons ensemble
              vos idées en réalité !
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-5">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Prénom"
                  required
                  className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-border bg-surface-hover text-text-primary text-xs sm:text-sm md:text-base lg:text-lg focus:border-brand-500 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-border bg-surface-hover text-text-primary text-xs sm:text-sm md:text-base lg:text-lg focus:border-brand-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 lg:gap-5">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-border bg-surface-hover text-text-primary text-xs sm:text-sm md:text-base lg:text-lg focus:border-brand-500 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 rounded-md border border-border bg-surface-hover text-text-primary text-xs sm:text-sm md:text-base lg:text-lg focus:border-brand-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                  className="w-full p-2 sm:p-3 md:p-3.5 lg:p-4 h-28 sm:h-32 md:h-36 lg:h-40 rounded-md border border-border bg-surface-hover text-text-primary text-xs sm:text-sm md:text-base lg:text-lg focus:border-brand-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Envoyer message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Section Informations de Contact */}
        <motion.div
          className="w-full xl:w-1/2 flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contactItems.map(({ Icon, text, href }, index) => (
            <motion.a
              key={text}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 sm:gap-4 lg:gap-5 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            >
              <Icon className="text-brand-500 bg-surface p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full border border-border text-3xl sm:text-4xl md:text-5xl lg:text-6xl group-hover:bg-brand-500 group-hover:text-black transition-colors duration-200" />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-text-muted group-hover:text-brand-500 transition-colors duration-200">
                {text}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
