import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import "./styles/global.css";
import { useState, useEffect } from "react";
import OffcanvasExample from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import SubscriptionSection from "./components/footer/Subscreption";
import Header from "./components/header/Headre";
import BackToTop from "./components/BackToTop";
import Productsection from "./components/productsection/Productsection";
// import ImageSlider from "./components/ slider/InageSlider";
// import Services from "./components/services/Services";
// import Products from "./components/products/Products";
// import About from "./components/about/About";
// import Projects from "./components/projects/Projects";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

// save in local storage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev);
  };


  return (
    <>
    <div className={darkMode ? 'text-light' : 'bg-light text-dark'}>

      <OffcanvasExample darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Header/>
      <Productsection/>
      {/* <ImageSlider/> */}
      {/* <Products/> */}
      {/* <Services/> */}
      {/* <About/> */}
      {/* <Projects/> */}
      <SubscriptionSection/>
      <Footer/>
      <BackToTop/>
    </div>
    </>
  );
}

export default App;
