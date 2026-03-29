import { makeStyles, Container, Grid, Typography } from "@material-ui/core";

import FeaturedProjects from "./FeaturedProjects";
import InTheNews from "./InTheNews";
import About from "./About";
import { Link } from "react-router-dom";

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
								I’m a software engineer and data scientist focused on building thoughtful, high-impact products around complex data. My work sits at the intersection of full-stack development, large-scale analytics, and real-world applications—from developing precision oncology tools that integrate genomic and clinical data to building interactive platforms for exploring millions of records. I enjoy taking ideas from early concept through production, combining strong engineering fundamentals with a deep understanding of data to create systems that are both powerful and usable.
							</p>
							<p>
								Please enjoy browsing through my <Link to="/portfolio">portfolio</Link>{" "}
								or reading my <Link to="/resume-ds">data science</Link> and{" "}
								<Link to="/resume-swe">software engineering</Link> resumes, and feel
								free to reach out with any questions!
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
