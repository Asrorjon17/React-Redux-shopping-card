import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default () => {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash);

	const addCash = () => {
		dispatch({ type: "ADD_CASH", payload: 1 });
	};
	const getCash = () => {
		dispatch({ type: "GET_CASH", payload: 1 });
	};
	console.log(cash);
	return (
		<div className="con">
			<Box
				sx={{
					display: "flex",
					m: "20%",
					width: "30%",
					justifyContent: "space-around",
				}}
			>
				<Button variant="contained" onClick={() => getCash()}>
					-
				</Button>
				<Typography variant="h4">{cash}</Typography>

				<Button variant="contained" onClick={() => addCash()}>
					+
				</Button>
			</Box>
		</div>
	);
};
