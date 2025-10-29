// import React from "react";
// import { useParams } from "react-router-dom";

// const products = [
//   {
//     id: "kaolin",
//     title: "کائولن",
//     image: "https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg",
//     description: `
//     شرکت اونیکس اردبیل از سال ۱۳۹۰ فعالیت خود در زمینه تولید و عرضه انواع محصولات سرامیکی را آغاز کرده است 
//     و در سال ۱۳۹۸ با سرمایه‌گذاری در تهیه و فرآوری و عرضه کاولن با کیفیت بالا را شروع کرده است.
//     معدن کاولن این شرکت واقع در محدوده مشکین شهر و از معادن با کیفیت و عیار بالای آلومینا در سطح کشوری می‌باشد.  
//     این مجموعه در فاز اول با همکاری متخصصین مجرب و ماشین آلات به روز و با ظرفیت اسمی سالانه ۲۰ هزار تن 
//     محصول خود را به صورت کلوخ و دانه‌بندی شده به بازار عرضه می‌نماید.  
//     سایت فرآوری واحد در دست مونتاژ راه‌اندازی می‌باشد که در آینده نزدیک انواع کاولن فرآوری شده نیز به بازار عرضه خواهد شد.
//     `,
    
//   },
//   {
//     id: "industrial-bricks",
//     title: "آجر‌های صنعتی",
//     image: "/images/img3.jpg",
//     description: "این آجرها برای محیط‌های با دمای بالا طراحی شده‌اند.",
//   },
//   {
//     id: "decorative-bricks",
//     title: "آجر نما",
//     image: "/images/houseimage.PNG",
//     description: "آجرهای نما برای طراحی داخلی و خارجی ساختمان‌ها استفاده می‌شوند.",
//   },
//   {
//     id: "clay",
//     title: "سفال",
//     image: "/images/sophalimage.JPG",
//     description: "سفال، یکی از قدیمی‌ترین هنرهای دستی ایرانی است.",
//   },
// ];

// const ProductDetail: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>();
//   const product = products.find((p) => p.id === productId);

//   if (!product) return <div className="text-center py-5">محصول پیدا نشد.</div>;

//   return (
//     <div className="container py-5 ">
//   <div className="row align-items-center text-center text-md-start">
//     {/* عکس سمت چپ */}
//     <div className="col-md-6 mb-4 mb-md-0">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="img-fluid rounded shadow"
//         style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
//       />
//     </div>

//     {/* متن سمت راست */}
//     <div className="col-md-6">
//       <h1 className="fw-bold mb-4 text-end">{product.title}</h1>
//       <p className="lead text-end">{product.description}</p>
//     </div>
//   </div>
// </div>

//   );
// };

// export default ProductDetail;



import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const products = [
  {
    id: "kaolin",
    title: "کائولن",
    images: [
      "https://onyxcompany.ir/assets/moarefi02-CPLMm8M4.jpg",
      "/public/images/img4.jpg",
    ],
    description: `
    شرکت اونیکس اردبیل از سال ۱۳۹۰ فعالیت خود در زمینه تولید و عرضه انواع محصولات سرامیکی را آغاز کرده است 
    و در سال ۱۳۹۸ با سرمایه‌گذاری در تهیه و فرآوری و عرضه کاولن با کیفیت بالا را شروع کرده است.
    معدن کاولن این شرکت واقع در محدوده مشکین شهر و از معادن با کیفیت و عیار بالای آلومینا در سطح کشوری می‌باشد.  
    این مجموعه در فاز اول با همکاری متخصصین مجرب و ماشین آلات به روز و با ظرفیت اسمی سالانه ۲۰ هزار تن 
    محصول خود را به صورت کلوخ و دانه‌بندی شده به بازار عرضه می‌نماید.  
    سایت فرآوری واحد در دست مونتاژ راه‌اندازی می‌باشد که در آینده نزدیک انواع کاولن فرآوری شده نیز به بازار عرضه خواهد شد.
    `,
  },
  {
    id: "industrial-bricks",
    title: "آجر‌های صنعتی",
    images: ["/images/img3.jpg", "/images/img4.jpg"],
    description: "این آجرها برای محیط‌های با دمای بالا طراحی شده‌اند.",
  },
  {
    id: "decorative-bricks",
    title: "آجر نما",
    images: ["/images/houseimage.PNG", "/images/brick2.jpg"],
    description: "آجرهای نما برای طراحی داخلی و خارجی ساختمان‌ها استفاده می‌شوند.",
  },
  {
    id: "clay",
    title: "سفال",
    images: ["/images/sophalimage.JPG", "/images/sophal2.jpg"],
    description: "سفال، یکی از قدیمی‌ترین هنرهای دستی ایرانی است.",
  },
];


const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="text-center py-5">محصول پیدا نشد.</div>;

  return (
    <div className="container py-5 min-vh-100 d-flex align-items-center">
      <div className="row align-items-center text-center text-md-start w-100">
        {/* ✅ اسلایدر سمت چپ */}
        <div className="col-md-6 mb-4 mb-md-0">
          <Carousel fade interval={3000}>
            {product.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img}
                  alt={`${product.title}-${i}`}
                  className="d-block w-100 rounded shadow"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* ✅ متن سمت راست */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-4 text-end">{product.title}</h1>
          <p className="lead text-end">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
