import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const articles = [
  {
    id: 1,
    src: "/images/img3.jpg",
    title: "آجر نسوز سنگین",
    desc: "متن کامل مقاله آجر نسوز سنگین در اینجا قرار می‌گیرد...",
  },
  {
    id: 2,
    src: "/images/Refractorybrick.jpeg",
    title: "آجرهای عایق نسوز",
    desc: "توضیحات کامل درباره آجرهای عایق نسوز...",
  },
  {
    id: 3,
    src: "/images/germ.jpeg",
    title: "جرم‌های نسوز",
    desc: "اطلاعات کامل در مورد جرم‌های نسوز...",
  },
  {
    id: 4,
    src: "/images/premade.jpeg",
    title: "قطعات پیش ساخته (پریکست)",
    desc: "مقاله درباره قطعات پیش ساخته نسوز...",
  },
  {
    id: 5,
    src: "/images/malat.jpeg",
    title: "ملات‌ها و ماستیک‌ها",
    desc: "در این مقاله در مورد ملات‌ها و ماستیک‌ها صحبت می‌کنیم...",
  },
  {
    id: 6,
    src: "/images/Glucose.jpeg",
    title: "مواد اولیه",
    desc: "توضیحات مربوط به مواد اولیه صنایع نسوز...",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) return <p className="text-center mt-5">مقاله یافت نشد 😔</p>;

  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">{article.title}</h2>
      <LazyLoadImage
        src={article.src}
        effect="blur"
        alt={article.title}
        className="img-fluid rounded shadow"
      />
      <p className="mt-4 text-justify">{article.desc}</p>
    </Container>
  );
};

export default ArticlePage;
