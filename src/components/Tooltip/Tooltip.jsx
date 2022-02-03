/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

function Tooltip({ product }) {
	return (
		<Container>
			<ImgWrap style={{ backgroundImage: `url(${product.imageUrl})` }} />
			<InfoWrap>
				<span className="name">{product.productName}</span>
				<div className="priceInfo">
					{product.discountRate !== 0 && (
						<span className="discount">{product.discountRate}%</span>
					)}
					{product.outside && <span className="estimated">예상가</span>}
					<span className="price">
						{product.priceDiscount.toLocaleString()}
					</span>
				</div>
			</InfoWrap>
			<IconWrap>
				<IoIosArrowForward className="icon" />
			</IconWrap>
		</Container>
	);
}

export default Tooltip;

const Container = styled.div`
	width: 212px;
	height: 70px;
	border-radius: 7px;
	display: flex;
	align-items: center;
	padding: 8px;
	box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
	margin: 50px;
	box-sizing: content-box;
	background-color: white;
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
