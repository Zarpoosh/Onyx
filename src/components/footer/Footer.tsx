import { Container, Navbar, Nav } from "react-bootstrap";
import {
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaYoutube,
  // FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";
import SubscriptionSection from "./Subscreption";
const Footer = () => {
  const emails = [
    "+98 9120761399",
    "ceo@onyxcompany.ir",
    "business.develop@onyxcompany.ir",
    "sales1@onyxcompany.ir",
    "sales2@onyxcompany.ir",
    "sales3@onyxcompany.ir",
    "lab@onyxcompany.ir",
  ];

  const socialLinks = [
    {
      icon: <FaXTwitter className="text-success" size={22} />,
      url: "#",
    },
    {
      icon: <FaInstagram className="text-success" size={22} />,
      url: "https://www.instagram.com/onyxcompany.ir?igsh=NTc4MTIwNjQ2YQ==",
    },
    {
      icon: <FaLinkedin className="text-success" size={22} />,
      url: "https://www.linkedin.com/in/onyx-ir-0a8426288?trk=contact-info",
    },
    {
      icon: <FaYoutube className="text-success" size={22} />,
      url: "#",
    },
    {
      icon: <FaGoogle className="text-success" size={22} />,
      url: "#",
    },
  ];

  return (
    <footer id="about" className="bg-dark text-light pt-5 pb-3">
      <SubscriptionSection />

      <Container>
        <Navbar bg="dark" variant="dark" expand="lg" className="py-4">
          <Container className="d-flex justify-content-between align-items-start flex-wrap gap-4">
            <div className="text-center text-lg-start flex-fill">
              <h5 className="text-success mb-3 fw-bold">ارتباط با ما</h5>
              <ul className="list-unstyled text-start m-0 d-inline-block">
                {emails.map((email, index) => (
                  <li
                    key={index}
                    className="mb-2 d-flex align-items-center gap-2 text-break"
                  >

                    <a
                      href={`mailto:${email}`}
                      className="text-light text-decoration-none"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Nav className="d-flex flex-column text-end flex-fill text-center">
              <h5 className="text-success mb-3 fw-bold">منو</h5>
              {[
                "صفحه اصلی",
                "درباره ما",
                "خدمات",
                "محصولات",
                "ارتباط با ما",
              ].map((item, i) => (
                <Nav.Link
                  key={i}
                  href={`#${
                    ["home", "about", "services", "products", "contact"][i]
                  }`}
                  className="text-light mb-2"
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>

            <div className="d-flex flex-column text-end flex-fill text-center">
              <h5 className="text-success mb-3 fw-bold">شبکه‌های اجتماعی</h5>
              <div className="social-icons d-flex justify-content-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn p-0"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </Navbar>

        <Navbar
          bg="dark"
          variant="dark"
          className="py-3 mt-4 border-top border-secondary"
        >
          <Container>
            <Navbar.Text className="text-center w-100 small">
              © 2024 Onyx Industrial Group. All rights reserved. {" | "}
              <a
                href="#privacy"
                className="text-success text-decoration-none mx-1"
              >
                Privacy policy
              </a>{" "}
              |
              <a
                href="#terms"
                className="text-success text-decoration-none mx-1"
              >
                Terms of service
              </a>{" "}
              |
              <a
                href="#cookies"
                className="text-success text-decoration-none mx-1"
              >
                Cookies settings
              </a>
            </Navbar.Text>
          </Container>
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
