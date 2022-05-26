import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Section from "../Section";
import projectsList from "../projects/ProjectsList";

const Projects = () => {
  const classes = useStyles();
  return (
    <Section header="Projects" id="projects">
      <Grid container className={classes.content}>
        {projectsList}
      </Grid>
    </Section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  content: {
    marginTop: theme.spacing(5),
  },
}));

export default Projects;
