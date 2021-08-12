import { Container, Offcanvas } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Display.css";
import * as productData from "./products.json";
import * as exchangeData from "./exchange_rates.json";
import React, { useState } from "react";

const selectedCurrency = "USD";
const products = productData.default;
const exchangeRates = exchangeData.default;
const aud = exchangeRates[0];
const usd = exchangeRates[1];
const cny = exchangeRates[2];

function CallOffCanvas(product) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productID = product.id;
  const productName = product.name;
  const productDescription = product.description;
  const relatedProducts = product.relatedProducts;
  const productPrice =
    product.price.base !== selectedCurrency
      ? convertCurrency(
          product.price.base,
          selectedCurrency,
          product.price.amount
        )
      : product.price.amount;

  return (
    <Table hover className="styled-table">
      <tbody>
        <tr key={productID} onClick={handleShow}>
          <td>{productID}</td>
          <td>{productName}</td>
          <td>{productPrice}</td>
        </tr>
      </tbody>

      <Offcanvas show={show} onHide={handleClose} scroll>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{productName}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Product Description</p>
          <h4>{productDescription}</h4>
          <p>Price</p>
          <h4>
            {productPrice} {selectedCurrency}
          </h4>
          <p>Related Products</p>
          {relatedProducts.map((relatedProductID) => {
            const relatedProduct = products.find(
              (x) => x.id === relatedProductID
            );

            return (
              <Table hover className="styled-table">
                <tbody>
                  <tr key={productID}>
                    <td>{relatedProduct.id}</td>
                    <td>{relatedProduct.name}</td>
                    <td>{relatedProduct.price.amount}</td>
                  </tr>
                </tbody>
              </Table>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </Table>
  );
}

function convertCurrency(currencyFrom, currencyTo, amount) {
  switch (currencyFrom) {
    case "AUD":
      if (currencyTo === "USD") {
        return amount * aud.rates.USD;
      } else if (currencyTo === "CNY") {
        return amount * aud.rates.CNY;
      }
      break;
    case "USD":
      if (currencyTo === "AUD") {
        return amount * usd.rates.AUD;
      } else if (currencyTo === "CNY") {
        return amount * usd.rates.CNY;
      }
      break;
    case "CNY":
      if (currencyTo === "AUD") {
        return amount * cny.rates.AUD;
      } else if (currencyTo === "USD") {
        return amount * cny.rates.USD;
      }
      break;
    default:
      return null;
  }
}

function Display() {
  return (
    <div className="Display">
      <Container className="Display-main">
        <h1 className="Display-header">Summary</h1>
        <Table hover className="styled-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map((product) => createProductRow(product))} */}
          </tbody>
        </Table>
        {products.map(CallOffCanvas)}
      </Container>
    </div>
  );
}

export default Display;
