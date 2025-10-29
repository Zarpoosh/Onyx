import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div id="home" className="container-fluid my-5">
      {sections.map((section) => (
        <div key={section.id} className="mb-5 text-center">
          <h2 className="fw-bold mb-4">{section.title}</h2>
          <div className="image-wrapper position-relative d-inline-block">
            <Link to={`/products/${section.id}`}>
              <img
                src={section.image}
                alt={section.title}
                className="img-fluid rounded slider-img"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productsection;
