import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Row className="header-bar">
        <Col xs={8} md={10}>
          <h1 className="brand-name">Clothing Brand</h1>
        </Col>
        <Col xs={4} md={2}>
          <Form.Select
            aria-label="Currency"
            className="currency-selector"
            id="currencySelector"
          >
            <option value="USD" defaultValue>
              USD
            </option>
            <option value="AUD">AUD</option>
            <option value="CNY">CNY</option>
          </Form.Select>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
