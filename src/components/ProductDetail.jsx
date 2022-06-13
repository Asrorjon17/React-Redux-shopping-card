import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
const ProductDetail = () => {
	const [cardBtn, setCardBtn] = useState("Add");
	const proid = useParams();
	const proDetail = DATA.filter((x) => x.id == proid.id);
	const product = proDetail[0];
	console.log(product);

	const dispatch = useDispatch();
	const handleCart = (product) => {
		if (cardBtn === "Add") {
			dispatch(addItem(product));
			setCardBtn("Remove");
		} else {
			dispatch(delItem(product));

			setCardBtn("Add");
		}
	};
	return (
		<>
			<Box sx={{ width: "100%", display: "flex", p: "3%" }}>
				<Box sx={{ width: "50%", p: "5%" }}>
					<img src={product.image} alt="" width="100%" />
				</Box>
				<Box
					sx={{
						width: "50%",
						p: "5%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
					}}
				>
					<Box>
						<h1>{product.title}</h1>
						<br />
						<h3>{product.desc}</h3>
					</Box>

					<Box sx={{ width: "100%" }}>
						<Button
							variant="contained"
							sx={{ width: "100%" }}
							onClick={() => handleCart(product)}
						>
							{cardBtn}
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ProductDetail;
