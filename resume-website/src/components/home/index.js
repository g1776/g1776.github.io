import { makeStyles, Container, Grid, Typography } from "@material-ui/core";

import FeaturedProjects from "./FeaturedProjects";
import InTheNews from "./InTheNews";
import About from "./About";

const Home = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<Typography component="h1" variant="h3" className={classes.quote}>
						Gregory Glatzer
					</Typography>
					<Typography component="h2" variant="h5" className={classes.quoteSubtitle}>
						Data Scientist | Software Engineer
					</Typography>

					<div className={classes.about}>
						<Typography variant="h6">
							<p>
								I have a BS in Applied Data Science, experience working as a
								professional software engineer, and am currently seeking full-time
								employment in the fields of Data Science or Software Engineering.
								On this site you can browse through my portfolio of projects and
								achievements, which range from data analysis, reinforcement
								learning, computer vision, full-stack projects with NodeJS and AWS,
								and more!
							</p>
							<p>
								Please enjoy browsing through my{" "}
								<a href="/#/portfolio">portfolio</a> or reading my{" "}
								<a href="/#/resume">resume</a>, and feel free to reach out with any
								questions!
							</p>
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} md={6} className={classes.imgContainer}>
					<img
						src={process.env.PUBLIC_URL + "/me2.jpg"}
						className={classes.img}
						alt="Gregory Glatzer"
					/>
				</Grid>
			</Grid>

			<div id="portfolio" className={classes.portfolio}>
				<FeaturedProjects />
				<InTheNews />
				<About />
			</div>
		</Container>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "80%",
		marginBottom: theme.spacing(5),
		marginTop: theme.spacing(5),
	},
	imgContainer: {
		justifyContent: "center",
	},
	img: {
		width: "100%",
		height: "auto",
	},
	quote: {
		fontWeight: "bold",
		color: theme.palette.primary.main,
	},
	quoteSubtitle: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(3),
		fontWeight: "bold",
		color: "darkgrey",
	},
	explore: {
		textAlign: "center",
		color: "grey",
		marginTop: theme.spacing(9),
	},
	portfolio: {
		marginTop: theme.spacing(5),
	},
	about: {
		color: theme.palette.common.black,
	},
}));

export default Home;
