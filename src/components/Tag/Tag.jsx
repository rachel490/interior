/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip/Tooltip';

function Tag({ product }) {
	return (
		<Container x={product.pointX} y={product.pointY}>
			<img
				src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
				alt="search-icon"
				className="search-icon"
			/>
			<img
				src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
				className="close-icon hide"
				alt="close-icon"
			/>
			<Tooltip product={product} />
		</Container>
	);
}

export default Tag;

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
