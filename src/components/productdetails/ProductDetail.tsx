import { useParams } from "react-router-dom";
import KaolinDetail from "./KaolinDetail";
import IndustrialBricksDetail from "./IndustrialBricksDetail";
import DecorativeBricksDetail from "./DecorativeBricksDetail";
import ClayDetail from "./ClayDetail";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  switch (productId) {
    case "kaolin":
      return <KaolinDetail />;
    case "industrial-bricks":
      return <IndustrialBricksDetail />;
    case "decorative-bricks":
      return <DecorativeBricksDetail />;
    case "clay":
      return <ClayDetail />;
    default:
      return <div className="text-center py-5">محصول پیدا نشد.</div>;
  }
};

export default ProductDetail;
