import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { AboutUs } from "./pages/AboutUs";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { Compatibility } from "./pages/Compatibility";
import PlanDetails from "./pages/Plans";
import { Destinations } from "./pages/Destinations";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/plans/:destination" element={<PlanDetails />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;