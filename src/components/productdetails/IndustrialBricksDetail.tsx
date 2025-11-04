import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import InageSlider from "../ slider/InageSlider";
import "./IndustrialBricksDetail.css";
import { Link } from "react-router-dom";

const items = [
  {
    src: "/images/glocos2.jpeg",
    title: " کوره آهک و قند",
    desc: "استفاده از جرم های نسوز برای کوره های عمودی آهک",
  },
  {
    src: "/images/Glass making.jpeg",
    title: " شیشه و سرامیک",
    desc: "کوره مخزن ذوب شیشه پوشش کوره تونلی و کوره غلتکی کوره شاتل و مناطق پخت",
  },
  {
    src: "/images/petrochimical2.jpg",
    title: " پتروشیمی",
    desc: "کوره های حرارتی و برج های تقطیر صنایع نفت و گاز استفاده از جرم نسوز در نیروگاهای حرارتی وراکتورها،کورهای فرایندی و مبدل های حرارتی",
  },
  {
    src: "/images/Cement.jpeg",
    title: " سیمان",
    desc: "پوشش کوره دوارو پیش گرمکن خنک کننده کلینک",
  },
  {
    src: "/images/Casting.jpeg",
    title: "ریخته گری",
    desc: "استفاده از جرم های نسوزدر کوره های آلمینیومی و چدنی",
  },
  {
    src: "/images/irone.jpeg",
    title: " فولاد و آهن",
    desc: "استفاده مواد نسوز درکوره ی نورد و کوره ذوب مبدل کوره الکتریکی،کوره تصویه",
  },
];

const items2 = [
  {
    id:6,
    link:"/article/6",
    src: "/images/mastics.jpeg",
    title: "ماستیک ها  ",
    desc: "استفاده از جرم های نسوز برای کوره های عمودی آهک",
  },
  {
    id:5,
    link:"/article/5",
    src: "/images/malat.jpeg",
    title: "ملات ها ",
    desc: "کوره مخزن ذوب شیشه پوشش کوره تونلی و کوره غلتکی کوره شاتل و مناطق پخت",
  },
  {
    id:4,
    link:"/article/4",
    src: "/images/premade.jpeg",
    title: "قطعات پیش ساخته(پریکست) ",
    desc: "کوره های حرارتی و برج های تقطیر صنایع نفت و گاز استفاده از جرم نسوز در نیروگاهای حرارتی وراکتورها،کورهای فرایندی و مبدل های حرارتی",
  },
  {
    id:3,
    link:"/article/3",
    src: "/images/germ.jpeg",
    title: " جرم های نسوز",
    desc: "پوشش کوره دوارو پیش گرمکن خنک کننده کلینک",
  },
  {
    id:2,
    link:"/article/2",
    src: "/images/Refractorybrick.jpeg",
    title: "اجر های عایق نسوز",
    desc: "استفاده از جرم های نسوزدر کوره های آلمینیومی و چدنی",
  },
  {
    id:1,
    link:"/article/1",
    src:     "/public/images/img3.jpg",
    title: "اجر نسوز سنگین",
    desc: "استفاده مواد نسوز درکوره ی نورد و کوره ذوب مبدل کوره الکتریکی،کوره تصویه",
  },
];

const homeSlides = [
  "/images/img3.jpg",
  "/images/crick.jpeg",
  "/images/kureh.jpeg",
];

const homeIndustries = [
  "صنایع قند و آهک",
  "شیشه و سرامیک",
  "پتروشیمی",
  "سیمان",
  "ریخته گری",
  "فولاد",
];

const IndustrialBricksDetail = () => (
  <div>
    <InageSlider
    slides={homeSlides}
    industries={homeIndustries}
    showIndustries={true}
    fixedText="به سایت ما خوش آمدید"
    interval={3000}
     />
    <Container className="py-4 d-flex justify-content-center align-items-center">
      <div className="text-center w-100">
        <Row className="justify-content-center g-4">
          {items.map((item, index) => (
            <Col
              key={index}
              xs={10}
              sm={6}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <div className="image-card-wrapper position-relative">
                <div className="lazy-img-wrapper position-relative overflow-hidden rounded shadow-sm border-">
                  <LazyLoadImage
                    effect="blur"
                    src={item.src}
                    alt={item.title}
                    className="lazy-img img-fluid"
                  />
                  <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-white text-center p-3">
                      <p className="text-justify ">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <h6 className="overlay-title my-2">{item.title}</h6>
              </div>
            </Col>
          ))}
        </Row>
          <h3 className="text-bold m-4 ">فراورده های نسوز انیکس</h3>
      </div>
      
    </Container>


    <Container className="py-4 d-flex justify-content-center align-items-center">
      <div className="text-center w-100">
        <Row className="justify-content-center g-4">
          {items2.map((item2, index) => (
            <Col
              key={index}
              xs={10}
              sm={6}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <div className="position-relative">
                <Link to={item2.link} className="text-decoration-none">
                  <div className="lazy-img-wrapper position-relative overflow-hidden rounded shadow-sm">
                    <LazyLoadImage
                      effect="blur"
                      src={item2.src}
                      alt={item2.title}
                      className="lazy-img img-fluid"
                    />
                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="text-bold">
                        <p className="text-center text-white mb-0">مطالعه مقاله</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <h6 className="overlay-title my-2">{item2.title}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
    
  </div>
);

export default IndustrialBricksDetail;
