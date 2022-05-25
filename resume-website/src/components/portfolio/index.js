import { Grid, Link, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles} from "@material-ui/core/styles";

// import parts of the resume
import Blobs from "./Blob";
import Section from './Section';
import Header from "../Header";

import {Skills, useStyles as useSkillsStyles } from './Skills';
import Education from "./Education";
import Projects from "./Projects";


const PortfolioAnchorLink = (props) => {
  const classes = useStyles();
  return <Typography variant="h4" className={classes.anchorLink}>{props.label}</Typography>
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
          <PortfolioAnchorLink label="Skills" />
          <PortfolioAnchorLink label="Education" />
          <PortfolioAnchorLink label="Projects" />

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
  anchorLink: {
    marginBottom: theme.spacing(2),
  }
}));

export default Portfolio;
