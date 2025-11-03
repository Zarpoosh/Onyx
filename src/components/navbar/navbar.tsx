import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  const expand = "lg";

  return (
    <Navbar
      expand={expand}
      fixed="top"
      className={`sticky-top shadow-sm ${
        darkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://onyxcompany.ir/assets/logo-new2-DX-s1jsm.png"
            alt="Onyx Logo"
            height="30"
            className="d-inline-block align-top me-2"
          />
          Onyx
        </Navbar.Brand>

        <div className="d-flex align-items-center ms-auto">
          <Button
            variant={darkMode ? "light" : "dark"}
            onClick={toggleDarkMode}
            className="me-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </div>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          placement="end"
          className={`custom-offcanvas ${
            darkMode ? "offcanvas-dark" : "offcanvas-light"
          }`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>منو</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">صفحه اصلی</Nav.Link>

              {/* ✅ اینجا از react-scroll استفاده کردیم */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={600}
                offset={-70} // فاصله از Navbar
                className="nav-link"
              >
                درباره ما
              </Link>

              <Nav.Link href="#projects">پروژه‌ها</Nav.Link>
              <Nav.Link href="/services">خدمات مهندسی</Nav.Link>
              <Nav.Link href="#products">محصولات</Nav.Link>
            </Nav>

            <Form className="d-flex mt-3 mt-lg-0">
              <Form.Control
                type="search"
                placeholder="جستجو"
                className="me-2 search-input border-2"
              />
              <Button className="btn-custom search-btn">جستجو</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
