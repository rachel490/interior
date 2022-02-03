/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList/ProductList';
import Tag from "../components/Tag/Tag";

function ProductDisplay() {
	const [interiorInfo, setInteriorInfo] = useState({});
	const [activeId, setActiveId] = useState(-1);

	useEffect(() => {
		axios
			.get('https://cdn.ggumim.co.kr/test/image_product_link.json')
			.then((res) => setInteriorInfo(res.data));
	}, []);

	return (
		<div>
			<Content>
				<InteriorImage src={interiorInfo.imageUrl} alt="interior" />
				{interiorInfo.productList?.map(product => <Tag product={product} setActiveId={setActiveId} key={product.productId} />)}
			</Content>
			<ProductList products={interiorInfo.productList} activeId={activeId}/>
		</div>
	);
}

export default ProductDisplay;

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