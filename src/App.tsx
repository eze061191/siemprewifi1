import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations"; // Importación corregida
import NotFound from "./pages/NotFound";
import StyleGuide from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="style-guide" element={<StyleGuide />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;