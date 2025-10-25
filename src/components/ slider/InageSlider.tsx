import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InageSlider.css';

const InageSlider: React.FC = () => {
  // هر بخش ۳ عکس دارد
  const kaolinSlides = [
    "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
    "https://onyxcompany.ir/assets/NN22-D46a2zYr.jpeg",
    "https://onyxcompany.ir/assets/top-2-mz1dh84G.jpeg",
  ];

  const nesoozSanatiSlides = [
    "https://onyxcompany.ir/assets/IMG_6523-D5GpIDHD.png",
    "https://onyxcompany.ir/assets/kore-KdTZM4wp.jpeg"  
  ];

  const nesoozNamaSlides = [
     "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
  ];

  const sefalSlides = [
    "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg",
    "https://images.pexels.com/photos/37347/tools-workshop-equipment-tools.jpg",
    "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg",
  ];

  // تابع سازنده اسلایدر برای کاهش تکرار
  const renderSlider = (title: string, slides: string[]) => (
    <div className="mb-5">
      <h2 className="text-center fw-bold mb-4">{title}</h2>
      <div className="image-slider-wrapper position-relative">
        <Carousel fade interval={4000} controls indicators>
          {slides.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 slider-img"
                src={src}
                alt={`${title} Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* متن ثابت روی همه اسلایدها */}
        <div className="carousel-fixed-text position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h3>{title}</h3>
          {/* <p>بیش از ۲۵ سال سابقه درخشان در زمینه تولید و عرضه {title}.</p> */}
          <Button variant="btn-custom" className='btn-custom fw-bold m-1' href="#read-more">بیشتر</Button>
          <Button variant="dark" className=' bg-dark' href="#read-more">خدمات</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="home" className="container-fluid my-5">
      {renderSlider("کائولن", kaolinSlides)}
      {renderSlider("نسوز صنعتی", nesoozSanatiSlides)}
      {renderSlider("نسوزنما", nesoozNamaSlides)}
      {renderSlider("سفال", sefalSlides)}
    </div>
  );
};

export default InageSlider;
