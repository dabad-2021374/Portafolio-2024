import { Routes, Route, Navigate } from "react-router-dom";
import { Portafolio } from "./pages/Portafolio/Portafolio";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portafolio" element={<Portafolio />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/about" element={<About />} /> 
    </Routes>
  );
}