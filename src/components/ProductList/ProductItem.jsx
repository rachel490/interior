import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import activeIdState from '../../recoil/atoms';

function ProductItem({ product: { productId, imageUrl, discountRate } }) {
  const [activeId, setActiveId] = useRecoilState(activeIdState);

  const handleOnClick = () => {
    if (activeId === productId) {
      setActiveId(-1);
    } else {
      setActiveId(productId);
    }
  };

  return (
    <Container
      className={`${activeId === productId ? 'active' : ''}`}
      onClick={handleOnClick}
    >
      <ProductImage style={{ backgroundImage: `url(${imageUrl})` }}>
        {discountRate ? (
          <DiscountBadge>
            {discountRate}
            <span>%</span>
          </DiscountBadge>
        ) : null}
      </ProductImage>
    </Container>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

const ProductImage = styled.div`
  width: 106px;
  height: 106px;
  position: relative;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;

  &.active {
    background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
    margin: 26px 4px;
    padding: 2px;
    border-radius: 18px;
  }

  ${ProductImage} {
    border: 0.5px solid white;
  }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;

  span {
    font-size: 8px;
  }
`;
