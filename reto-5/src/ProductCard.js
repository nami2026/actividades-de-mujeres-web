import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }
`;

const ProductCard = () => {
  return (
    <ProductContainer>
      <ProductName>Producto 1</ProductName>
      <p>$2.000.000</p>
      <BuyButton>Comprar</BuyButton>
    </ProductContainer>
  );
};

export default ProductCard;
