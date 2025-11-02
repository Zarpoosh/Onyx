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
import ProductDetail from "./components/productdetails/ProductDetail";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Loader from "./components/loader/Loader";
import ArticlePage from "./components/productdetails/ArticlePage";

const AppContent: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith("/products/");
  const hideHeader2 = location.pathname.startsWith("/article/");

  return (
    <>
      <OffcanvasExample darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {!hideHeader && !hideHeader2 && <Header />}

      <Routes>
        <Route path="/" element={<Productsection />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
};


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

const [loading, setLoading] = useState(true);

useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  const timer = setTimeout(() => setLoading(false), 500); // ۱.۵ ثانیه
  return () => clearTimeout(timer);
}, [darkMode]);

const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <Router>
      <ScrollToTop />
      {loading ? ( 
        <Loader />
      ) : (
        <div className={darkMode ? "text-light" : "bg-light text-dark"}>
          <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      )}
    </Router>
  );
};

export default App;



