import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import ProductDetail from "../../components/ProductDetail";
import Cardcha from "../../components/Cardcha";

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" element={<Product />}></Route>
				<Route path="/products/:id" element={<ProductDetail />}></Route>
				<Route path="/cardcha" element={<Cardcha />}></Route>
			</Routes>
		</div>
	);
};

export default App;
