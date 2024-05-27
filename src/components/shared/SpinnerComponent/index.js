import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const SpinnerComponent = () => {
  return (
    <Container className="text-center">
      <Spinner animation="border" role="status" />
      <p className="visually-show">Cargando Datos...</p>
    </Container>
  );
};

export default SpinnerComponent;
