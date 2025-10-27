import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productsection: React.FC = () => {
  const sections = [
    {
      title: "کائولن",
      image: "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
    },
    {
      title: "آجر‌های صنعتی",
      image: "/images/img3.jpg", 
    },
    {
      title: "آجر نما",
      image: "/images/houseimage.PNG",
    },
    {
      title: "سفال",
      image: "/images/sophalimage.JPG",
    },
  ];

  return (
    <div id="home" className="container-fluid my-5">
      {sections.map((section, index) => (
        <div key={index} className="mb-5 text-center">
          <h2 className="fw-bold mb-4">{section.title}</h2>
          <div className="image-wrapper position-relative d-inline-block">
            <img
              src={section.image}
              alt={section.title}
              className="img-fluid rounded slider-img"
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productsection;