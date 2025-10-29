import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

import OffcanvasExample from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Headre";
import BackToTop from "./components/BackToTop";
import Productsection from "./components/productsection/Productsection";
import ProductDetail from "./components/productsection/ProductDetail";

import { useState, useEffect } from "react";

// 👇👇 این کامپوننت جدید
const AppContent: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  // چک می‌کنیم آیا آدرس فعلی شامل "/products/" هست یا نه
  const hideHeader = location.pathname.startsWith("/products/");

  return (
    <>
      <OffcanvasExample darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* فقط وقتی آدرس جزئیات محصول نیست، Header رو نشون بده */}
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Productsection />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
};

// 👇 کامپوننت اصلی App
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={darkMode ? "text-light" : "bg-light text-dark"}>
        <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
};

export default App;
