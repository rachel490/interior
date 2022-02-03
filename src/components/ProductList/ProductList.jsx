import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <SliderWrap>
      <SliderContainer>
        {products?.map((product) => (
          <ProductItem product={product} key={product.productId} />
        ))}
      </SliderContainer>
    </SliderWrap>
  );
}

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.arrayOf.isRequired,
};

const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  width: 800px;
  background-color: #fff;
  padding: 0 10px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

  &.active {
    background: rgba(255, 255, 255, 0.3);
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;
