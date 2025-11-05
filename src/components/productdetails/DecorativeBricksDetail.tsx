import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./DecorativeBricksDetail.css";

const KaolinDetail = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="mb-4">آجر نما</h2>
      <LazyLoadImage
        src="/public/images/crick2.jpeg"
        effect="blur"
        alt="cricks"
        className="img-fluid rounded shadow"
      />
      
      <div className="mt-5">
        <h3 className="mb-4 text-success">مزایای استفاده از آجر سفید</h3>
        <div className="article-text text-justify">
          <p className="mb-3">
            آجر سفید از نظر زیبایی به دلیل رنگ روشن جلوه‌ای مدرن به ساختمان می‌دهد و همچنین در طول سال‌های متمادی به دلیل عدم کمرنگ شدن و شوره نبستن به دلیل ترکیب شیمیایی آن ماندگاری و تازگی نمایی ساخته آن در بلند مدت را تضمین می‌کند.
          </p>
          <p className="mb-3">
            کیفیت آجرنما سفید به طور کلی نسبت به رنگ‌های دیگر بالاتر می‌باشد که دلیل اصلی آن استفاده از خاک نسوز و کائولن با آلومینای بالا می‌باشد که هم مقاومت در برابر رطوبت و آفتاب و هم در برابر یخ زدگی نمای ساختمان را بالا خواهد برد.
          </p>
          <p className="mb-3">
            در کل آجر نما نسبت به مصالح دیگر مانند سنگ تراورتن و گرانیت دارای چسبندگی بالاتر به دلیل جذب آب بهتر و عایق بندی حرارتی به مراتب بالاتر می‌باشد.
          </p>
          <p className="mb-3">
            شرکت اونیکس به دلیل دارا بودن معادن با کیفیت بالا و تمرکز بر روی تولید انواع آجر نمای سفید و چندین سال تحقیق و بررسی ترکیبات مختلف، بهترین ترکیب و روش تولید را برای تولید محصولات خود انتخاب کرده و جز شرکت‌های پیشرو در زمینه تولید آجرنمای سفید می‌باشد.
          </p>
          <p>
            فشار پرس و دمای پخت محصولات سفید رنگ به دلیل استفاده از ترکیب خاص خیلی بالاتر از محصولات رنگی می‌باشد که این موضوع مقاومت کلی محصول را از هر نظر بالا خواهد برد.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default KaolinDetail;
