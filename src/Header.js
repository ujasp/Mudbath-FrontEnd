import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Row className="Header-bar">
        <Col xs={8} md={10}>
          <h1 className="Brand-name">Clothing Brand</h1>
        </Col>
        <Col xs={4} md={2}>
          <Form.Select aria-label="Currency">
            <option value="1" selected>
              USD
            </option>
            <option value="2">AUD</option>
            <option value="3">CNY</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
