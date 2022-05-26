import { Grid, Link, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme} from "@material-ui/core/styles";
import { HashLink } from 'react-router-hash-link';

// import parts of the resume
import Blobs from "./Blob";
import Section from './Section';
import Header from "../Header";
import {Skills} from './Skills';
import Education from "./Education";
import {Projects, projectsList} from "./Projects";


const PortfolioAnchorLink = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return <HashLink to={"/portfolio#" + props.to} className={classes.contentsLink}>
    <Typography variant="h4" className={classes.contentsLink}>
      <span style={{color: theme.palette.primary.main}}>#</span> {props.label}
    </Typography>
  </HashLink>
}

const ProjectAnchorLink = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  return <HashLink to={"/portfolio#" + props.to} className={classes.contentsLink}>
    <Typography variant="h4" className={classes.contentsLink}>
    &emsp;<span style={{color: theme.palette.primary.main}}>#</span> {props.label}
    </Typography>
    <Typography variant="h6" className={classes.contentsLinkDescription}>
    &emsp;{props.description}
    </Typography>
  </HashLink>
}

function Portfolio() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Blobs/>

      <div className={classes.root} maxWidth="md">

        <Header>Portfolio</Header>

        <Section header="Contents" hideAccent>
          {/* <Typography component="h3" variant="h4">Click to jump to content</Typography> */}
          <PortfolioAnchorLink label="Skills" to="skills"/>
          <PortfolioAnchorLink label="Education" to="education"/>
          <PortfolioAnchorLink label="Projects" to="projects"/>
          {
            projectsList.map(project => {
              return <ProjectAnchorLink 
                  label={project.props.title} 
                  to={project.props.id} 
                  description={project.props.subtitle}/>
            })
          }

        </Section>


        <Skills />
        <Education />
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
    "&:link": {color: theme.palette.common.black},
    "&:visited": {color: theme.palette.common.black},
    "&:hover": {color: theme.palette.primary.main},
    "&:active": {color: theme.palette.primary.main},

  },
  contentsLinkDescription: {
    margin: 0,
    padding: 0,
    textDecoration: "none",
    fontWeight: "none",
    textIndent: "-1em",
    paddingLeft: "4em",
    fontSize: "1.2rem",
    "&:link": {color: theme.palette.common.black},
    "&:visited": {color: theme.palette.common.black},
    "&:hover": {color: theme.palette.primary.main},
    "&:active": {color: theme.palette.primary.main},

  },
  
}));

export default Portfolio;
