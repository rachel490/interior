/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';
import Tag from '../components/Tag/Tag';

function ProductDisplay() {
	const [interiorInfo, setInteriorInfo] = useState({});

	useEffect(() => {
		axios
			.get('https://cdn.ggumim.co.kr/test/image_product_link.json')
			.then((res) => setInteriorInfo(res.data));
	}, []);

	return (
		<Wrap>
			<div>
				<Content>
					<InteriorImage src={interiorInfo.imageUrl} alt="interior" />
					{interiorInfo.productList?.map((product) => (
						<Tag product={product} key={product.productId} />
					))}
				</Content>
				<ProductList products={interiorInfo.productList} />
			</div>
		</Wrap>
	);
}

export default ProductDisplay;

const Wrap = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Content = styled.div`
	position: relative;
	display: inline-block;
	cursor: pointer;
`;

const InteriorImage = styled.img`
	width: 800px;
	display: block;
	position: relative;
`;
