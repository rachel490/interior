/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

function ProductItem() {
	return (
		<Container className="active">
			<ProductImage
				style={{
					backgroundImage: `url(
						https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80,
					)`,
				}}
			>
				<DiscountBadge>
					38
					<span>%</span>
				</DiscountBadge>
			</ProductImage>
		</Container>
	);
}

export default ProductItem;

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