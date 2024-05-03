import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function NavbarController() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className="container">
        <img className="brandLogo" src="/brand.svg" alt="" />
        <Navbar.Brand href="#">PayOnDelivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link href="#action1">Buyer</Nav.Link>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-primary" href="#action2">Seller</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Nav.Link href="#action2">Help Center</Nav.Link>
            <Button variant="outline-primary">Log In</Button>
            <Button className="btn-primary">Get Started</Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
