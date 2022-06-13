import { Badge, Box } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const state = useSelector((state) => state.addItem);
	return (
		<>
			<Box
				sx={{
					width: "100%",
					bgcolor: "blue",
					display: "flex",
					justifyContent: "space-between",
					px: "5%",
					py: "2%",
				}}
			>
				<Box>
					<Link to={`/`}>
						{" "}
						<h2>Home</h2>
					</Link>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Badge badgeContent={state.length} color="error">
						<Link to={`/cardcha`}>
							<ShoppingCartIcon color="action" />
						</Link>
					</Badge>
				</Box>
			</Box>
		</>
	);
};

export default Navbar;
