import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Display.css";
import * as productData from "./products.json";
import * as exchangeData from "./exchange_rates.json";

const selectedCurrency = "USD";
const products = productData.default;
const exchangeRates = exchangeData.default;
const aud = exchangeRates[0];
const usd = exchangeRates[1];
const cny = exchangeRates[2];

function createProductRow(product) {
  const productID = product.id;
  const productName = product.name;
  const productPrice =
    product.price.base !== selectedCurrency
      ? convertCurrency(
          product.price.base,
          selectedCurrency,
          product.price.amount
        )
      : product.price.amount;

  return (
    <tr key={productID}>
      <td>{productID}</td>
      <td>{productName}</td>
      <td>{productPrice}</td>
    </tr>
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
          <tbody>{products.map(createProductRow)}</tbody>
        </Table>
      </Container>
      {console.log(convertCurrency("AUD", "USD", 10))}
    </div>
  );
}

export default Display;
