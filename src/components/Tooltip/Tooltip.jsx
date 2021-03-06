import PropTypes from 'prop-types';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

function Tooltip({
  product: {
    pointX,
    pointY,
    imageUrl,
    productName,
    discountRate,
    outside,
    priceDiscount,
  },
  active,
}) {
  return (
    <Container
      className={`${active} ${pointX > 300 ? 'bottomLocation' : ''} ${
        pointY > 200 ? 'rightLocation' : ''
      }`}
    >
      <ImgWrap style={{ backgroundImage: `url(${imageUrl})` }} />
      <InfoWrap>
        <span className="name">{productName}</span>
        <div className="priceInfo">
          {discountRate !== 0 && (
            <span className="discount">
              {discountRate}
              %
            </span>
          )}
          {outside && <span className="estimated">예상가</span>}
          <span className="price">{priceDiscount.toLocaleString()}</span>
        </div>
      </InfoWrap>
      <IconWrap>
        <IoIosArrowForward className="icon" />
      </IconWrap>
    </Container>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  product: PropTypes.objectOf.isRequired,
  active: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 220px;
  height: 86px;
  margin-top: 16px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4a4a4a;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  position: absolute;
  top: 28px;
  left: -20px;

  &.hide {
    display: none;
  }

  &.bottomLocation {
    top: unset;
    bottom: 52px;

    &::before {
      top: unset;
      bottom: -8px;
      transform: rotate(180deg);
    }
  }

  &.rightLocation {
    left: -160px;

    &::before {
      left: unset;
      right: 38px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 30px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const ImgWrap = styled.div`
  margin-right: 8px;
  width: 70px;
  height: 70px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .name {
    line-height: 1.3rem;
    text-overflow: ellipsis;
    color: #333c45;
  }

  .priceInfo {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: bold;
  }

  .discount {
    color: #ff585d;
    margin-right: 4px;
  }

  .price {
    color: #181d1f;
    font-size: 16px;
  }

  .estimated {
    color: #898f94;
    font-size: 11px;
    line-height: 1.2em;
    font-weight: bold;
    margin-right: 4px;
  }
`;

const IconWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;

  .icon {
    width: 20px;
    height: 20px;
    color: #4a4a4a;
  }
`;
