import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Productsection.css"; 

const Productsection: React.FC = () => {
  const sections = [
    {
      id: "kaolin",
      title: "کائولن",
      image: "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
      description: "نوعی خاک صنعتی سفید رنگ برای سرامیک‌سازی و کاشی.",
    },
    {
      id: "industrial-bricks",
      title: "آجر‌های صنعتی",
      image: "/images/img3.jpg",
      description: "آجرهای مقاوم در برابر حرارت، مناسب برای کوره‌ها.",
    },
    {
      id: "decorative-bricks",
      title: "آجر نما",
      image: "/images/houseimage.PNG",
      description: "آجرهای تزیینی برای زیباسازی نماهای ساختمان.",
    },
    {
      id: "clay",
      title: "سفال",
      image: "/images/sophalimage.JPG",
      description: "مواد اولیه برای تولید سفال و ظروف سنتی.",
    },
  ];

  return (
    <div id="home">
      {sections.map((section) => (
        <div
          key={section.id}
          className="full-section d-flex flex-column justify-content-center align-items-center text-center"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="overlay"></div>
          <div className="content position-relative">
            <h2 className="fw-bold text-white mb-3">{section.title}</h2>
            <p className="text-white mb-4">{section.description}</p>
            <Link to={`/products/${section.id}`} className="btn btn-light px-4">
              مشاهده محصول
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productsection;
