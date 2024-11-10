import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./views/contact/Contact";
import Navbar from "./views/navbar/Navbar";
import Work from "./views/work/Work";
import Resume from "./views/resume/Resume";
import Section from "./views/section/Section";
import Service from "./views/service/Service";

function App() {
  return (
    <Router basename="/portofoliobailoconde">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/service" element={<Service />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/travail" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Section />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
