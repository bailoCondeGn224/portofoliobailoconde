import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "./views/contact/Contact";
import Navbar from "./views/navbar/Navbar";
import Work from "./views/work/Work";
import Resume from "./views/resume/Resume";
import Section from "./views/section/Section";
import Service from "./views/service/Service";

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Section /></PageTransition>} />
        <Route path="/service" element={<PageTransition><Service /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/travail" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><Section /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename="/portofoliobailoconde">
      <div>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
