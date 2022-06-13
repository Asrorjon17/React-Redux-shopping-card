import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import DATA from "../Data";
import { Link, useNavigate } from "react-router-dom";
const MAP = DATA.map((item) => {
	// const navigate = useNavigate();

	return (
		<Card sx={{ maxWidth: "30%" }}>
			<CardActionArea key={item.id}>
				<CardMedia component="img" image={item.image} alt="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{item.desc}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					variant="outlined"
					color="secondary"
					to="/products/${item.id}"
					// onClick={() => navigate(`/products/${item.id}`)}
				>
					<Link to={`/products/${item.id}`}>Buy Now</Link>
				</Button>
			</CardActions>
		</Card>
	);
});
const Product = () => {
	return (
		<div>
			<Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, m: "5%" }}>
				{MAP}
			</Box>
		</div>
	);
};

export default Product;
