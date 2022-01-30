import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

function Tooltip() {
	return (
		<Container>
			<ImgWrap>
				<img
					src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
					alt="table"
				/>
			</ImgWrap>
			<InfoWrap>
				<span className="name">플로윙 화이트 원형 테이블</span>
				<div className="priceInfo">
					<span className="discount">38%</span>
					<span className="price">74,000</span>
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
`;

const ImgWrap = styled.div`
	margin-right: 8px;

	img {
		width: 70px;
		height: 70px;
		border-radius: 4px;
		object-fit: cover;
	}
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
