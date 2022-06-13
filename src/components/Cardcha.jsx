import { Box, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
const Cardcha = () => {
	const state = useSelector((state) => state.addItem);
	const dispatch = useDispatch();
	const handleClose = (item) => {
		dispatch(delItem(item));
	};
	const cartItem = (cartItem) => {
		return (
			<Box
				sx={{
					with: "90%",
					bgcolor: "blue",
					display: "flex",
					color: "white",
					mx: "10%",
					my: "1%",
					justifyContent: "space-between",
					border: 1,
					alignItems: "center",
				}}
				key={cartItem.id}
			>
				<Box sx={{ p: "5px" }}>
					<img src={cartItem.image} alt="" width="200px" />
				</Box>

				<Box>
					<h2>{cartItem.title}</h2>
				</Box>

				<Button onClick={() => handleClose(cartItem)}>❌</Button>
			</Box>
		);
	};
	const emptyCart = () => {
		return (
			<Box
				sx={{
					with: "90%",
					bgcolor: "blue",
					display: "flex",
					color: "white",
					mx: "10%",
					my: "1%",
					justifyContent: "space-between",
					border: 1,
					alignItems: "center",
				}}
			>
				<Box sx={{ width: "100%", p: "5%", textAlign: "center" }}>
					<h2>Tugadi</h2>
				</Box>
			</Box>
		);
	};
	return (
		<>
			{state.length === 0 && emptyCart()}
			{state.length !== 0 && state.map(cartItem)}
		</>
	);
};

export default Cardcha;
