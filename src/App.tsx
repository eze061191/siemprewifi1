import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Compatibility from "./pages/Compatibility";
import PlanDetails from "./pages/Plans";
import { Destinations } from "./pages/Destinations";
import NotFound from "./pages/NotFound";
import StyleGuide from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compatibility" element={<Compatibility />} />
          <Route path="plans" element={<PlanDetails />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="style-guide" element={<StyleGuide />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;