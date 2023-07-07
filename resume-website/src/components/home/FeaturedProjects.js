import { makeStyles, Grid, Typography } from "@material-ui/core";

import PortfolioCard from "./PortfolioCard";

const FeaturedProjects = () => {
	const classes = useStyles();
	return (
		<>
			<Typography component="h2" variant="h4">
				Featured Projects
			</Typography>
			<Grid container spacing={3} className={classes.featuredProjects}>
				<Grid item xs={12} md={6}>
					<PortfolioCard
						title="Capstone Project: Classifying Misleading listings on Airbnb"
						description="This was my Capstone Project for my Applied Data Science major at Penn State, with Dr. John Yen as an advisor throughout the 5 month long project. The project was done in partnership with the Penn State Smeal College of Business, which has a relationship with Airbnb. This is how we got the data and inspiration to do the project. The goal of the proejct was to create a machine learning model that can classify Airbnb
                        listings as misleading. This was done by manually reading and labelling thousands of
                        reviews, taking note of which ones claim that their stay did not align with what the
                        listing described (whether in the description or amenities). These labels were then
                        used to train a multiclass classifer built with sklearn."
						image={process.env.PUBLIC_URL + "/airbnb.jpeg"}
						link="/portfolio#airbnb"
						btnText="Read More"
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<PortfolioCard
						title="Software Engineer at KCF Technologies"
						description="KCF Technologies is a company that has a machine health platform for monitoring
                        machines using IIoT vibration sensors for real-time data analytics. At KCF Technologies
                        I was on the Data Integration and Edge Enablement teams, creating applications to
                        facilitate the real-time processing of data between IIoT systems which monitor the
                        machine health of multi-million dollar industrial equipment. I worked on a variety of
                        projects, including:"
						image={process.env.PUBLIC_URL + "/KCF_Logo.jpeg"}
						link="/portfolio#kcf"
						btnText="Read More"
					/>
				</Grid>
				<Grid item xs={12} md={6}></Grid>
				<Grid item xs={12} md={6}></Grid>
			</Grid>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	featuredProjects: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
}));

export default FeaturedProjects;
