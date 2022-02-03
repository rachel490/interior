/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';

function ProductDisplay() {
	const [interiorInfo, setInteriorInfo] = useState({});

	useEffect(() => {
		axios.get('https://cdn.ggumim.co.kr/test/image_product_link.json').then((res) => setInteriorInfo(res.data));
	}, []);

	return (
		<div>
			<ProductList products={interiorInfo.productList} />
		</div>
	);
}

export default ProductDisplay;
