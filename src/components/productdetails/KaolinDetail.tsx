import { Carousel } from "react-bootstrap";
import "./KaolinDetail.css"
const KaolinDetail = () => {
  const relatedImages = [
    "/images/img7.jpeg",
    "/images/img8.jpeg",
    "/images/img9.jpeg",
    "/images/img10.jpeg",
  ];

  return (
    <div className="kaolin-page">
      {/* بخش توضیحات و کاروسل */}
      <div className="container py-5 min-vh-100 d-flex align-items-center">
        <div className="row align-items-center text-center text-md-start w-100">
          <div className="col-md-6 mb-4 mb-md-0">
            <Carousel fade interval={3000}>
              <Carousel.Item>
                <img
                  src="https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg"
                  className="d-block w-100 rounded"
                  alt="kaolin"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/images/img4.jpg"
                  className="d-block w-100 rounded"
                  alt="kaolin2"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-md-6 text-end">
            <h1 className="fw-bold">کائولن</h1>
            <p className="lead">
              شرکت اونیکس اردبیل از سال ۱۳۹۰ فعالیت خود در زمینه تولید و عرضه انواع
              محصولات سرامیکی را آغاز کرده است و در سال ۱۳۹۸ با سرمایه‌گذاری در تهیه
              و فرآوری و عرضه کاولن با کیفیت بالا را شروع کرده است. معدن کاولن این
              شرکت واقع در محدوده مشکین شهر و از معادن با کیفیت و عیار بالای آلومینا
              در سطح کشوری می‌باشد. این مجموعه در فاز اول با همکاری متخصصین مجرب و
              ماشین‌آلات به‌روز با ظرفیت اسمی سالانه ۲۰ هزار تن محصول خود را به صورت
              کلوخ و دانه‌بندی شده به بازار عرضه می‌نماید و سایت فرآوری واحد در دست
              مونتاژ راه‌اندازی می‌باشد که در آینده نزدیک انواع کاولن فرآوری شده نیز
              به بازار عرضه خواهد شد.
            </p>
          </div>
        </div>
      </div>



      <div className="text-center my-5">
        <h2 className="fw-bold display-5"> عکس محصولات </h2>
      </div>
      {/* دو تصویر تمام صفحه */}
      <div className="w-100">
        <img
          src="/images/img5.jpeg"
          alt="kaolin full 1"
          className="w-100 full-image"
        />
        <img
          src="/images/img6.jpeg"
          alt="kaolin full 2"
          className="w-100 full-image"
        />
          <img
          src="/images/datasheet.jpeg"
          alt="kaolin full 2"
          className="w-100 full-image"
        />
      </div>

      {/* تیتر وسط */}
      <div className="text-center my-5">
        <h2 className="fw-bold display-5">تصاویر مربوطه</h2>
      </div>

      {/* ۴ تصویر با استفاده از map */}
      <div className="w-100">
        {relatedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`kaolin related ${index + 1}`}
            className="w-100 full-image"
          />
        ))}
      </div>
    </div>
  );
};

export default KaolinDetail;
