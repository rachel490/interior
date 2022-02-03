/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

function ProductList({ products, activeId }) {
	return (
		<Container>
			{products?.map((product) => (
				<ProductItem product={product} key={product.productId} activeId={activeId} />
			))}
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
