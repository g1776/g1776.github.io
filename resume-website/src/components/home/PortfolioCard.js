import { makeStyles, Grid, Typography, Button, Paper } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";

const PortfolioCard = ({ title, description, image, link, btnText, externalLink = false }) => {
	const classes = useStyles();
	return (
		<Paper component={Grid} className={classes.card} container spacing={1}>
			{/* Main content, including title, description, and image */}
			<Grid item container spacing={1}>
				<Grid item>
					<Typography variant="h5" className={classes.title}>
						{title}
					</Typography>
				</Grid>

				<Grid item xs={12} md={8}>
					<Typography variant="body1">
						<p className={classes.description}>{description}</p>
					</Typography>
				</Grid>
				<Grid
					item
					container
					xs={12}
					md={4}
					style={{ justifyContent: "end", alignItems: "center" }}
				>
					<img src={image} style={{ width: "100%", height: "auto" }} alt={title} />
				</Grid>
			</Grid>

			{/* "Read More" Button (We use Grid here to get flex-end) */}
			<Grid item container style={{ justifyContent: "end", alignContent: "flex-end" }}>
				<Grid item>
					{externalLink ? (
						<a href={link} className="noDecoration">
							<Button variant="contained" color="primary" className={classes.btn}>
								{btnText}
							</Button>
						</a>
					) : (
						<Button
							component={HashLink}
							to={link}
							variant="contained"
							color="primary"
							className={classes.btn}
						>
							{btnText}
						</Button>
					)}
				</Grid>
			</Grid>
		</Paper>
	);
};

const useStyles = makeStyles((theme) => ({
	card: {
		padding: theme.spacing(2),
		height: "100%",
	},
	spacer: {
		marginTop: theme.spacing(2),
	},
	title: {
		height: "100%",
	},
	btn: {
		color: theme.palette.common.white,
	},
	description: {
		display: "-webkit-box",
		"-webkit-line-clamp": 6,
		"-webkit-box-orient": "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

export default PortfolioCard;
