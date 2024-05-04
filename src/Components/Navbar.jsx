import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarController() {
  return (
    <Navbar expand="lg" className=" navContainer">
      <div className="container-fluid">
        <img className="brandLogo" src="/brand.svg" alt="" />
        <Navbar.Brand href="#">PayOnDelivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  className="navbarToggle border-0 outline-0" />
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
          <div className="col-md-4 d-flex justify-content-around bg-primar">
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
