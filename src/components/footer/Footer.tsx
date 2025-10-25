// import { Container, Navbar, Nav, Button } from "react-bootstrap";
// import { FaLinkedin, FaInstagram, FaGoogle, FaYoutube, FaEnvelope } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import "./footer.css";

// const Footer = () => {
//   const emails = [
//     "ceo@onyxcompany.ir",
//     "business.develop@onyxcompany.ir",
//     "sales1@onyxcompany.ir",
//     "sales2@onyxcompany.ir",
//     "sales3@onyxcompany.ir",
//     "lab@onyxcompany.ir",
//   ];

//   return (
    // <footer className="bg-dark text-light pt-5 pb-3">
    //   <Container>
    //     {/* بخش اصلی فوتر - سه ستون */}
    //     <Navbar bg="dark" variant="dark" expand="lg" className="py-4">
    //       <Container className="d-flex justify-content-between align-items-start flex-wrap gap-4">

    //         {/* ستون ۱: ایمیل‌ها */}
    //         <div className="text-center text-lg-start flex-fill">
    //           <h5 className="text-success mb-3 fw-bold">ارتباط با ما</h5>
    //           <ul className="list-unstyled text-start m-0 d-inline-block">
    //             {emails.map((email, index) => (
    //               <li key={index} className="mb-2 d-flex align-items-center gap-2">
    //                 <FaEnvelope className="text-success" />
    //                 <a href={`mailto:${email}`} className="text-light text-decoration-none">
    //                   {email}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>

    //         {/* ستون ۲: لینک‌های سایت */}
    //         <Nav className="d-flex flex-column text-end flex-fill  text-center">
    //           <h5 className="text-success mb-3 fw-bold">منو</h5>
    //           <Nav.Link href="#home" className="text-light mb-2">صفحه اصلی</Nav.Link>
    //           <Nav.Link href="#about" className="text-light mb-2">درباره ما</Nav.Link>
    //           <Nav.Link href="#services" className="text-light mb-2">خدمات</Nav.Link>
    //           <Nav.Link href="#products" className="text-light mb-2">محصولات</Nav.Link>
    //           <Nav.Link href="#contact" className="text-light mb-2">ارتباط با ما</Nav.Link>
    //         </Nav>

    //        {/* ستون ۳: شبکه‌های اجتماعی */}
    //        <div className="d-flex flex-column align-items-center align-items-lg-start flex-fill">
    //           <h5 className="text-success mb-3 fw-bold">شبکه‌های اجتماعی</h5>
    //           <div className="d-flex flex-wrap justify-content-center gap-3">
    //             <Button variant="btn-custom" className="p-0"><FaXTwitter className="text-success" size={22} /></Button>
    //             <Button variant="btn-custom" className="p-0"><FaInstagram className="text-success" size={22} /></Button>
    //             <Button variant="btn-custom" className="p-0"><FaLinkedin className="text-success" size={22} /></Button>
    //             <Button variant="btn-custom" className="p-0"><FaYoutube className="text-success" size={22} /></Button>
    //             <Button variant="btn-custom" className="p-0"><FaGoogle className="text-success" size={22} /></Button>
    //           </div>
    //         </div>
    //       </Container>
    //     </Navbar>
    //     {/* کپی‌رایت */}
    //     <Navbar bg="dark" variant="dark" className="py-3 mt-4 border-top border-secondary">
    //       <Container>
    //         <Navbar.Text className="text-center w-100 small">
    //           © 2024 Onyx Industrial Group. All rights reserved.
    //           {" | "}
    //           <a href="#privacy" className="text-success text-decoration-none mx-1">Privacy policy</a> |
    //           <a href="#terms" className="text-success text-decoration-none mx-1">Terms of service</a> |
    //           <a href="#cookies" className="text-success text-decoration-none mx-1">Cookies settings</a>
    //         </Navbar.Text>
    //       </Container>
    //     </Navbar>
    //   </Container>
    // </footer>
//   );
// };

// export default Footer;




import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGoogle, FaYoutube, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const emails = [
        "ceo@onyxcompany.ir",
        "business.develop@onyxcompany.ir",
        "sales1@onyxcompany.ir",
        "sales2@onyxcompany.ir",
        "sales3@onyxcompany.ir",
        "lab@onyxcompany.ir",
      ];
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-4">
        <Container className="d-flex justify-content-between align-items-start flex-wrap gap-4">

          <div className="text-center text-lg-start flex-fill">
            <h5 className="text-success mb-3 fw-bold">ارتباط با ما</h5>
            <ul className="list-unstyled text-start m-0 d-inline-block">
              {emails.map((email, index) => (
                <li key={index} className="mb-2 d-flex align-items-center gap-2">
                  <FaEnvelope className="text-success" />
                  <a href={`mailto:${email}`} className="text-light text-decoration-none">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Nav className="d-flex flex-column text-end flex-fill  text-center">
            <h5 className="text-success mb-3 fw-bold">منو</h5>
            <Nav.Link href="#home" className="text-light mb-2">صفحه اصلی</Nav.Link>
            <Nav.Link href="#about" className="text-light mb-2">درباره ما</Nav.Link>
            <Nav.Link href="#services" className="text-light mb-2">خدمات</Nav.Link>
            <Nav.Link href="#products" className="text-light mb-2">محصولات</Nav.Link>
            <Nav.Link href="#contact" className="text-light mb-2">ارتباط با ما</Nav.Link>
          </Nav>

         <div className="d-flex flex-column text-end flex-fill  text-center">
            <h5 className="text-success mb-3 fw-bold">شبکه‌های اجتماعی</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button variant="btn-custom" className="p-0"><FaXTwitter className="text-success" size={22} /></Button>
              <Button variant="btn-custom" className="p-0"><FaInstagram className="text-success" size={22} /></Button>
              <Button variant="btn-custom" className="p-0"><FaLinkedin className="text-success" size={22} /></Button>
              <Button variant="btn-custom" className="p-0"><FaYoutube className="text-success" size={22} /></Button>
              <Button variant="btn-custom" className="p-0"><FaGoogle className="text-success" size={22} /></Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark" className="py-3 mt-4 border-top border-secondary">
        <Container>
          <Navbar.Text className="text-center w-100 small">
            © 2024 Onyx Industrial Group. All rights reserved.
            {" | "}
            <a href="#privacy" className="text-success text-decoration-none mx-1">Privacy policy</a> |
            <a href="#terms" className="text-success text-decoration-none mx-1">Terms of service</a> |
            <a href="#cookies" className="text-success text-decoration-none mx-1">Cookies settings</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </Container>
  </footer>
  );
};

export default Footer;
