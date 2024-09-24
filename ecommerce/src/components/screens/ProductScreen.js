import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  //   Button,
  Card,
  Container,
} from "react-bootstrap";
import Rating from "../Rating";
import axios from "axios";
import "./../../x.css";

export default function ProductScreen() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get(`/api/product/${id}`);
      // console.log(data)
      setProducts(data);
    }
    fetchproducts();
  },[]);

  return (
    <Container className="my-5">
      <div>
        <Row>
          <Col
            md={6}
            className="my-5 d-flex justify-center align-center"
            style={{ width: "100vh", height: "50vh" }}

          >
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}  className="my-5" 
            style={{ width: "85vh"}}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.productname}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <b>Brand:</b> {product.productbrand}{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                <b>Description:</b> {product.productinfo}
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Price:</b>
                    </Col>
                    <Col>
                      <>{product.price} Rs</>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <b>Status:</b>
                    </Col>
                    <Col>
                      {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <btn
                    className="my-btn btn-block"
                    disabled={product.stockcount === 0}
                    type="button"
                  >
                    <b>Add to Cart</b>
                  </btn>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Link to="/" className="btn my-btn my-3">
          <i class="fa-solid fa-arrow-left " style={{ color: "#000000" }}></i>
          <b className="mx-2">Back to result</b>
        </Link>
      </div>
    </Container>
  );
}
