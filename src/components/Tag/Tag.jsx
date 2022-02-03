/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import activeIdState from '../../recoil/atoms';
import Tooltip from '../Tooltip/Tooltip';

function Tag({ product}) {
	const [activeId, setActiveId] = useRecoilState(activeIdState);

	const toggleActive = () => {
		setActiveId(product.productId);
	};

	return (
		<Container x={product.pointX} y={product.pointY}>
			<img
				src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
				alt="search-icon"
				className={`search-icon ${activeId === product.productId ? 'hide' : ''}`}
				onClick={toggleActive}
			/>
			<img
				src="//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
				className={`close-icon ${activeId === product.productId ? '' : 'hide'}`}
				alt="close-icon"
				onClick={toggleActive}
			/>
			<Tooltip product={product} className={activeId === product.productId ? '' : 'hide'} />
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
