import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: "kaolin",
    title: "کائولن",
    image: "https://onyxcompany.ir/assets/IMG_2287-BM3eospK.jpeg",
    description: "کائولن خاکی سفید رنگ است که در صنایع سرامیک و چینی‌سازی کاربرد دارد.",
  },
  {
    id: "industrial-bricks",
    title: "آجر‌های صنعتی",
    image: "/images/img3.jpg",
    description: "این آجرها برای محیط‌های با دمای بالا طراحی شده‌اند.",
  },
  {
    id: "decorative-bricks",
    title: "آجر نما",
    image: "/images/houseimage.PNG",
    description: "آجرهای نما برای طراحی داخلی و خارجی ساختمان‌ها استفاده می‌شوند.",
  },
  {
    id: "clay",
    title: "سفال",
    image: "/images/sophalimage.JPG",
    description: "سفال، یکی از قدیمی‌ترین هنرهای دستی ایرانی است.",
  },
];

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="text-center py-5">محصول پیدا نشد.</div>;

  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid rounded mb-4"
        style={{ maxHeight: "500px", objectFit: "cover" }}
      />
      <p className="lead">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
