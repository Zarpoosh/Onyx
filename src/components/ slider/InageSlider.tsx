import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InageSlider.css";

const ImageSlider: React.FC = () => {
  const slides = [
    "/public/images/img3.jpg",
    "/public/images/crick.jpeg",
    "/public/images/kureh.jpeg",
  ];

  const industries = [
    "شیشه و سرامیک",
    "پتروشیمی",
    "سیمان",
    "ریخته گری",
    "فولاد",
  ];
  return (
    <div className="image-slider-wrapper position-relative">
      <Carousel fade interval={4000} controls indicators>
        {slides.map((src, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 slider-img"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* متن ثابت روی همه اسلایدها */}
      <div className="carousel-fixed-text position-absolute top-50 start-50 translate-middle text-center text-white px-3">

        <div className="industries-list mt-4 text-center">
          <h3 className="mb-4 ">صنایع مصرف کننده</h3>
          <div className="industries-container rtl-direction">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
              {industries.map((industry, index) => (
                <li key={index} className="industry-item m-1 text-dark">
                  <span className="industry-badge bg-light bg-opacity-75 rounded px-1 py-1">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
