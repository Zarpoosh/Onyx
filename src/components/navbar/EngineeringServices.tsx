import { Container } from "react-bootstrap";
import "./engineering.css";

const EngineeringServices = () => {
  return (
    <Container className="engineering-container my-5 pt-5 text-end">
      <h2 className="mb-4 fw-bold text-center">حوزه خدمات مهندسی ما</h2>
      <p>
        <strong>طراحی مهندسی (Engineering Design):</strong> شامل تحلیل نیازهای فرآیند، تعیین نوع کوره
        (Batch, Continuous, Vacuum, Atmosphere)، محاسبه ظرفیت حرارتی، تعیین سوخت یا منبع گرمایی،
        انتخاب مواد نسوز و عایق، و مدل‌سازی عملکرد.
      </p>
      <p>
        <strong>ساخت و تأمین تجهیزات (Fabrication & Supply):</strong> پس از تایید طراحی، ساخت قطعات کوره،
        تأمین عایق‌ها، نسوزها، سوخت‌رسانی و سیستم‌های کنترلی، همچون کلیه‌ی بخش‌های مربوطه با کیفیت بالا.
      </p>
      <p>
        <strong>اجرای پروژه و نصب (Installation & Commissioning):</strong> شامل نصب در محل، اتصال به سیستم‌های کنترلی و ایمنی،
        راه‌اندازی، تست عملکرد و انتقال به اپراتور. هر کوره صنعتی نیاز به راه‌اندازی دقیق دارد تا عملکرد بهینه تضمین شود.
      </p>

      <h3 className="section-title mt-5">مزایای همکاری با ما</h3>
      <ul className="benefits-list">
        <li>تجربه مهندسی کامل: تیم متخصص در طراحی کوره‌های صنعتی مطابق نیاز شما</li>
        <li>افزایش بازدهی و کاهش هزینه‌ها: طراحی و اجرای دقیق برای بهینه‌سازی مصرف انرژی</li>
        <li>بهینه‌سازی فرآیند: تحلیل دقیق و انتخاب مواد مناسب برای افزایش کیفیت نهایی</li>
        <li>پشتیبانی کامل پروژه: از طراحی تا سرویس‌های پس از فروش</li>
        <li>راهکارهای سفارشی: طراحی متناسب با شرایط و الزامات خاص هر مشتری</li>
      </ul>

      <h3 className="section-title mt-5">کاربردها و زمینه‌های صنعتی</h3>
      <ul className="industry-list">
        <li>صنایع فولاد، متالورژی و ریخته‌گری</li>
        <li>صنایع شیشه و سرامیک</li>
        <li>صنایع شیمیایی و پتروشیمی</li>
        <li>صنایع آلومینیوم، مس و غیرآهنی</li>
        <li>نیروگاه‌ها، بازیافت حرارتی و کوره‌های خاص تحقیقاتی</li>
      </ul>

      <h3 className="section-title mt-5">روند همکاری با ما</h3>
      <ol className="steps-list">
        <li>مشاوره اولیه و تعریف نیازها</li>
        <li>طراحی مفهومی و مهندسی تفصیلی</li>
        <li>ساخت و تأمین تجهیزات</li>
        <li>نصب، راه‌اندازی و تست</li>
        <li>پشتیبانی و نگهداری سیستم</li>
      </ol>
    </Container>
  );
};

export default EngineeringServices;
