import React from 'react';
import { RecoilRoot } from 'recoil';
import ProductDisplay from './page/ProductDisplay';
import GlobalStyle from './Style/GlobalStyle';

function App() {
	return (
		<div>
			<RecoilRoot>
				<GlobalStyle />
				<ProductDisplay />
			</RecoilRoot>
		</div>
	);
}

export default App;
