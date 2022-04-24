import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./product";
import axios from "axios";

const Products = ({ cat }) => {

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f3f3f3;
`;

const [products, setProducts] = useState([]);

useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );
      setProducts(res.data);
    } catch (err) {}
  };
  getProducts();
}, [cat]);

return (
  <Container>
    {products
          .slice(0, 15)
          .map((item) => <Product item={item} key={item.id} />)}
  </Container>
);
};

export default Products
