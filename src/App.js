

import Container from "react-bootstrap/Container";
import NavBarComponent from "./components/shared/NavBarComponent";
import FooterComponent from "./components/shared/FooterComponent";
import TableComponent from "./components/TableComponent";

import './App.css';
function App() {
  return (
    <div className="App">
      <NavBarComponent title={'TEST RED EFECTIVA'} />
      <Container className="classContainer">
        <TableComponent />
      </Container>
      <FooterComponent />

    </div>
  );
}

export default App;
