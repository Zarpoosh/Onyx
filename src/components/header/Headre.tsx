import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header: React.FC = () => {
  return (
    <section id="about" className="about-section py-5 my-2 ">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={{ span: 7, order: 1 }}
            xs={{ span: 12, order: 2 }}
            className="text-md-start text-center my-5"
          >
            <h2 className="fw-bold mb-3 text-end">گروه صنعتی و معدنی اونیکس</h2>
            <p className="mb-4 text-end p-3">
              گروه صنعتی و معدنی <strong>اونیکس</strong> با بیش از ۲۵ سال تجربه‌
              موفق در زمینه‌ معادن و صنعت، با توکل به خدا و تکیه بر نیروی کار
              متعهد و دلسوز، امروز در جایگاهی قرار گرفته است که می‌تواند در کنار
              معتبرترین کارخانه‌های کشور حضور مؤثر داشته باشد و محصولات خود را
              با بالاترین کیفیت و آسان‌ترین شیوه‌ی معامله، در اختیار مشتریان
              داخلی و خارجی قرار دهد. این مجموعه با بهره‌مندی از منابع معدنی
              مرغوب شامل کائولن (خاک صنعتی ) سیلیس ( کوارتز و آمورف ) و شیل که
              کلیه تحقیقات مراحل زمین‌شناسی ، اکتشاف و استخراج و بهره برداری و
              صنایع تبدیلی و دانش فنی خود مجموعه به‌ صورت اختصاصی و مستقل اجرا
              نموده و با تحقیقات سال‌ها فعالیت تخصصی و مداوم در آزمایشگاه‌های
              مجهز مبنای راه‌اندازی واحد تحقیق و توسعه (R&D) مجموعه بوده تا
              فرآیند تولید بر پایه‌ دانش و تجربه هدایت شود محصولات و
              توانمندی‌های ‌این گروه صنعتی شامل فراوری کائولن فرآورده‌های نسوز
              سنگین و سبک صنعتی - تولید آجرهای ساختمانی و نما - تولید چینی
              بهداشتی چینی آلات و تولید آجر سفال ساختمانی - احداث کارگاه‌ کوره
              سازی شامل کوره تونلی و شاتل طراحی و ساخت دستگاه‌ها و تجهیزات مورد
              نیاز مربوطه با تکیه بر این زیرساخت‌ها گروه صنعتی انیکس شرایطی
              فراهم آورده تا گام مهمی در معدن و صنعت کشور ‌و تامین کننده مواد
              اولیه کارخانه های کاشی سرامیک صنایع چینی بهداشتی و آجرهای نسوز ،
              رنگ سازی و کاغذ سازی و آرایشی بهداشتی و ... با کیفیت بالا و مناسب
              و برای عرضه در بازار داخلی و خارجی گامی موثر داشته باشد
            </p>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="" className="btn-custom" href="#learn-more">
                Learn More
              </Button>
            </div>
          </Col>

          <Col
            lg={{ span: 5, order: 2 }}
            xs={{ span: 12, order: 1 }}
            className="text-center mb-2 mb-md-0"
          >
            <LazyLoadImage
              src="/images/facroty.jpg"
              alt="Bolduzer"
              effect="blur" 
              className="img-fluid rounded shadow about-image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
