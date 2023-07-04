import React, { useState, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import $ from "jquery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import useWindowSize from "../../useWindowSize";

// import parts of the resume
import Blobs from "./Blob";
import Section from "./Section";
import Header from "../Header";
import { Skills } from "./Skills";
import Education from "./Education";
import Projects from "./projects";
import projectsList from "./projects/ProjectsList";

const PortfolioAnchorLink = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<HashLink to={"/portfolio#" + props.to} className={classes.contentsLink}>
			<Typography variant="h4" className={classes.contentsLink}>
				<span style={{ color: theme.palette.primary.main }}>#</span> {props.label}
			</Typography>
		</HashLink>
	);
};

const ProjectAnchorLink = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<HashLink to={"/portfolio#" + props.to} className={classes.contentsLink}>
			<Typography variant="h4" className={classes.contentsLink}>
				&emsp;<span style={{ color: theme.palette.primary.main }}>#</span> {props.label}
			</Typography>
			<Typography variant="h6" className={classes.contentsLinkDescription}>
				&emsp;{props.description}
			</Typography>
		</HashLink>
	);
};

function Portfolio() {
	const classes = useStyles();
	const windowSize = useWindowSize();
	const [blobs, setBlobs] = useState(null);

	useEffect(() => {
		// calculate blob pcnt
		// (what percent of the window (>100%) has content that we should render blobs in?)
		const screenHeight = window.screen.height;
		const htmlHeight = $(document).height();
		const pcnt = (screenHeight / htmlHeight) * 100;

		setBlobs(<Blobs pcnt={pcnt} />);
	}, [windowSize]);

	return (
		<React.Fragment>
			{blobs}

			<div className={classes.root} maxWidth="md">
				<Header>Portfolio</Header>

				<Section header="Contents" hideAccent>
					<Button variant="contained" className={classes.btn} size="large">
						<Link to={"/resume"} className={classes.btnText}>
							View resume
						</Link>
					</Button>

					<PortfolioAnchorLink label="Education" to="education" />
					<PortfolioAnchorLink label="Skills" to="skills" />
					<PortfolioAnchorLink label="Projects" to="projects" />
					{projectsList.map((project) => {
						return (
							<ProjectAnchorLink
								label={project.props.title}
								to={project.props.id}
								description={project.props.subtitle}
							/>
						);
					})}
				</Section>

				<Education />
				<Skills />
				<Projects />
			</div>
		</React.Fragment>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		width: "80%",
		backgroundColor: "transparent",
		position: "absolute",
		top: "63%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	contentsLink: {
		margin: 0,
		padding: 0,
		textDecoration: "none",
		fontWeight: "bold",
		textIndent: "-2em",
		paddingLeft: "2em",
		fontSize: "1.5rem",
		"&:link": { color: theme.palette.common.black },
		"&:visited": { color: theme.palette.common.black },
		"&:hover": { color: theme.palette.primary.main },
		"&:active": { color: theme.palette.primary.main },
	},
	contentsLinkDescription: {
		margin: 0,
		padding: 0,
		textDecoration: "none",
		fontWeight: "none",
		textIndent: "-1em",
		paddingLeft: "4em",
		fontSize: "1.2rem",
		"&:link": { color: theme.palette.common.black },
		"&:visited": { color: theme.palette.common.black },
		"&:hover": { color: theme.palette.primary.main },
		"&:active": { color: theme.palette.primary.main },
	},
	toTop: {
		position: "fixed",
		bottom: 10,
		right: 10,
		backgroundColor: "#F28C2880",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
		fontSize: "0.8rem",
	},
	btn: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(5),
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	btnText: {
		margin: 0,
		padding: 0,
		textDecoration: "none",
		fontWeight: "bold",
		textIndent: "-2em",
		paddingLeft: "2em",
		fontSize: "1.5rem",
		"&:link": { color: theme.palette.common.white },
		"&:visited": { color: theme.palette.common.white },
		"&:hover": { color: theme.palette.primary.white },
		"&:active": { color: theme.palette.primary.white },
	},
}));

export default Portfolio;
