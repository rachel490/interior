import PropTypes from 'prop-types';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import activeIdState from '../../recoil/atoms';
import Tooltip from '../Tooltip/Tooltip';

function Tag({ product }) {
  const { productId, pointX, pointY } = product;
  const [activeId, setActiveId] = useRecoilState(activeIdState);

  const toggleActive = () => {
    if (activeId === productId) {
      setActiveId(-1);
    } else {
      setActiveId(productId);
    }
  };

  return (
    <Container x={pointX} y={pointY}>
      <img
        src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
        alt="search-icon"
        className={`search-icon ${
          activeId === productId ? 'hide' : ''
        }`}
        onClick={toggleActive}
      />
      <img
        src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
        className={`close-icon ${activeId === productId ? '' : 'hide'}`}
        alt="close-icon"
        onClick={toggleActive}
      />
      <Tooltip
        product={product}
        active={activeId === productId ? '' : 'hide'}
      />
    </Container>
  );
}

export default Tag;

Tag.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

const Container = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  top: ${(props) => props.x * 1.6}px;
  left: ${(props) => props.y * 1.6}px;

  img {
    width: 32px;
    height: 32px;
  }

  .hide {
    display: none;
  }
`;
