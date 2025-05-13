import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ktaLogo from "@/Assets/LandingPage/KtaIcon.png";
import "./NavBar.scss";
import { Link, useLocation  } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/app/about")
  const aboutPageStyles = {
    background: "transparent",
    position: "absolute",
    width: "100%"
  }


  return (
    <Navbar expand="lg" className="bg-body-white px-4" style={isAboutPage?aboutPageStyles:{} }>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={ktaLogo} width={"100"} alt="KTA" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={isAboutPage?"navLinkWhite":"navLink"}  as={Link} to="/app/about">
              ABOUT
            </Nav.Link>

            <NavDropdown
              className="navLink"
              title="PRODUCTS"
              id={isAboutPage?"navbarScrollingDropdownWhite":"navbarScrollingDropdown"}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={isAboutPage?"navLinkWhite":"navLink"} as={Link} to="/app/downloads">
              Download
            </Nav.Link>
            <Nav.Link className={isAboutPage?"navLinkWhite":"navLink"} as={Link} to="#action2">
              BLOG
            </Nav.Link>
            <Nav.Link className={isAboutPage?"navLinkWhite":"navLink"} as={Link} to="/app/calculator">
              CALCULATORS
            </Nav.Link>
            <Nav.Link className={isAboutPage?"navLinkWhite":"navLink"} as={Link} to="/app/careers">
              CAREERS
            </Nav.Link>
            <Nav.Link as={Link} to="/app/contact" className="contactButton">
              Contact
            </Nav.Link>
          </Nav>

          <div id="demo-2">
            <input type="search" placeholder="Product Search..." />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
