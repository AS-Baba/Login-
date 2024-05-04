import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

export default function NavbarController() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <Navbar expand="lg" className=" navContainer">
      <div className="container-fluid">
        <img className="brandLogo" src="/brand.svg" alt="" />
        <Navbar.Brand href="#" className="brand-name">
          {isTabletOrMobile ? "Seller" : "PayOnDelivery"}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="navbarToggle border-0 outline-0"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="#">Buyer</Nav.Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link className="text-primary" href="#">
              Seller
            </Nav.Link>
          </Nav>
          <div className="col-lg-4 col-sm-6 d-flex justify-content-around">
            <div className="col mt-2">
              <Nav.Link href="#">Help Center</Nav.Link>
            </div>
            <div className="col">
              <Button variant="outline-primary">Log In</Button>
            </div>
            <div className="col">
              <Button className="btn-primary">Get Started</Button>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
