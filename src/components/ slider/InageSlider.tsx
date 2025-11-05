import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InageSlider.css";

interface ImageSliderProps {
  slides: string[];                // مسیر عکس‌ها
  industries?: string[];           // لیست صنایع (اختیاری)
  showIndustries?: boolean;        // آیا لیست صنایع نمایش داده شود؟
  fixedText?: string;              // متن ثابت روی اسلایدر (اختیاری)
  interval?: number;               // فاصله زمانی بین اسلایدها
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  slides,
  industries = [],
  showIndustries = false,
  fixedText = "",
  interval = 4000,
}) => {
  return (
    <div className="image-slider-wrapper position-relative">
      <Carousel fade interval={interval} controls indicators>
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

      {showIndustries && (
        <div className="carousel-fixed-text position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          {fixedText && <h2 className="mb-4">{fixedText}</h2>}

          <div className="industries-list mt-4 text-center">
            <h3 className="mb-4">صنایع مصرف کننده</h3>
            <div className="industries-container rtl-direction">
              <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
                {industries.map((industry, index) => (
                  <li key={index} className="industry-item m-1 text-dark">
                    <span className="industry-badge bg-light bg-opacity-75 rounded px-2 py-1">
                      {industry}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
