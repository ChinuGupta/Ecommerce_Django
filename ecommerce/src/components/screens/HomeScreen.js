import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Card from "../Card.js";
import './../../x.css'
import Product from "../Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get("/api/products/");
      // console.log(data)
      setProducts(data);
    }
    fetchproducts();
  }, []);

  return (
    <Container>
     
      <br />
      <h3 className="product-heading my-5">PRODUCT CATEGORIES</h3>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product  product={product}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
