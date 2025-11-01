import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import InageSlider from "../ slider/InageSlider";
import "./IndustrialBricksDetail.css";    

const items = [
  { src: "/images/irone.jpeg", title: "صنایع فولاد و آهن" },
  { src: "/images/Casting.jpeg", title: "ریخته گری" },
  { src: "/images/Cement.jpeg", title: "سیمان" },
  { src: "/images/petrochimical.jpeg", title: "پتروشیمی" },
  { src: "/images/Glass making.jpeg", title: "شیشه و سرامیک" },
  { src: "/images/Glucose.jpeg", title: "کوره قند و آهک" },
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
                <div className="lazy-img-wrapper position-relative overflow-hidden rounded shadow-sm">
                  <LazyLoadImage
                    effect="blur"
                    src={item.src}
                    alt={item.title}
                    className="lazy-img img-fluid"
                  />
                  {/* متن روی تصویر */}
                  {/* متن روی تصویر */}
                  <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-white text-center p-3">
                      <h6 className="overlay-title mb-0">{item.title}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  </div>
);

export default IndustrialBricksDetail;