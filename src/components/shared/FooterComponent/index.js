import React from 'react';
import Container from "react-bootstrap/Container";
import "./index.css";

const FooterComponent = () => {
    return (
        <footer className="footer">
           <Container>
                <span className="text-muted">© 2024 Red Efectiva - Argel Alfaro</span>

            </Container>
        </footer>
    );
}

export default FooterComponent;