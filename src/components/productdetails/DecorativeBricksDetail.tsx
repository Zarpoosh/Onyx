import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const KaolinDetail = () => {
  const items = [
    { src: "/images/Casting.jpeg", title: "صنعت باتری‌سازی" },
    { src: "/images/petrochimical.jpeg", title: "صنعت پتروشیمی" },
    { src: "/images/Cement.jpeg", title: "صنعت سیمان" },
    { src: "/images/Glucose.jpeg", title: "صنایع قند و آهک" },
    { src: "/images/Glass making.jpeg", title: "صنایع شیشه و سرامیک" },
    { src: "/images/irone.jpeg", title: "صنایع فولاد و آهن" },
  ];

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center w-100">
        <h2 className="fw-bold mb-5">کاربردهای کائولن</h2>

        <Row className="justify-content-center g-4">
          {items.map((item, index) => (
            <Col
              key={index}
              xs={10}
              sm={6}
              md={4}
              lg={4}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="img-fluid rounded shadow-sm mb-3"
                style={{
                  maxHeight: "220px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <p className="fw-semibold">{item.title}</p>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default KaolinDetail;
