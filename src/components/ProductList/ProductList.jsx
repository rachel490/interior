import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

function ProductList() {
	return (
		<Container>
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		</Container>
	);
}

export default ProductList;

const Container = styled.div`
	display: flex;
	align-items: center;
	overflow-y: hidden;
	overflow-x: auto;
	width: 800px;
`;
