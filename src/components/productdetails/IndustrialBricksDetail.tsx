import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import InageSlider from "../ slider/InageSlider";
import "./IndustrialBricksDetail.css";

const items = [
  {
    src: "/images/Glucose.jpeg",
    title: "صنایع کوره آهک و قند",
    desc: "استفاده از جرم های نسوز برای کوره های عمودی آهک",
  },
  {
    src: "/images/Glass making.jpeg",
    title: "صنعت شیشه و سرامیک",
    desc: "کوره مخزن ذوب شیشه پوشش کوره تونلی و کوره غلتکی کوره شاتل و مناطق پخت",
  },
  {
    src: "/images/petrochimical.jpeg",
    title: "صنایع پتروشیمی",
    desc: "کوره های حرارتی و برج های تقطیر صنایع نفت و گاز استفاده از جرم نسوز در نیروگاهای حرارتی وراکتورها،کورهای فرایندی و مبدل های حرارتی",
  },
  {
    src: "/images/Cement.jpeg",
    title: "صنعت سیمان",
    desc: "پوشش کوره دوارو پیش گرمکن خنک کننده کلینک",
  },
  {
    src: "/images/Casting.jpeg",
    title: "ریخته گری",
    desc: "استفاده از جرم های نسوزدر کوره های آلمینیومی و چدنی",
  },
  {
    src: "/images/irone.jpeg",
    title: "صنعت فولاد و آهن",
    desc: "استفاده مواد نسوز درکوره ی نورد و کوره ذوب مبدل کوره الکتریکی،کوره تصویه",
  },
];

const IndustrialBricksDetail = () => (
  <div>
    <InageSlider />
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
                  {/* متن روی تصویر */}
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
      </div>
    </Container>
  </div>
);

export default IndustrialBricksDetail;
