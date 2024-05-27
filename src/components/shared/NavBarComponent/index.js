import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

const NavBarComponent = ({title}) => {
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="title">
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
