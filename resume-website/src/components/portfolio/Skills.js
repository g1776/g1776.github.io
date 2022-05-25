import { Grid, Typography, Chip } from "@material-ui/core";
import React from "react";
import { makeStyles} from "@material-ui/core/styles";

import Section from './Section';

function Skills() {
  const classes = useStyles();

  return (
    <Section header="Skills">
          <Typography variant="h6">
            <Grid container spacing={6}>
              <Grid item xs={12} md={4}>
                <Chip
                  label="Data Science / Machine Learning"
                  className={classes.DS_ML}
                />
                <ul className={classes.skills}>
                  <li>Python</li>
                  <li>Scikit-learn</li>
                  <li>SQL</li>
                  <li>Bokeh, Matplotlib</li>
                  <li>Pandas, NumPy</li>
                  <li>Geopandas, Shapely</li>
                  <li>Web Scraping</li>
                  <li>Data Preprocessing</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Chip
                  label="Web development"
                  className={classes.webdev}
                />
                <ul className={classes.skills}>
                  <li>React, Flask</li>
                  <li>HTML/CSS, JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Material-UI</li>
                  <li>Recharts.js</li>
                  <li>Google Firebase</li>
                </ul>
              </Grid>
              <Grid item xs={12} md={4}>
                <Chip
                  label="Other"
                  className={classes.other}
                />
                <ul className={classes.skills}>
                  <li>All-national, all-eastern, all-state clarinetist</li>
                  <li>Saxophonist</li>
                  <li>Flautist</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </Section>
  );
}

const useStyles = makeStyles((theme) => ({
  
  skills: {
    margin: 0,
    padding: 0,
    height: "100%",
    overflowX: "hidden",
  },

  DS_ML: {
    backgroundColor: "#AFE1AF",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: "1rem",
  },
  webdev: {
    backgroundColor: "#FFC300",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: "1rem",
  },
  other: {
    backgroundColor: "#EE92F4",
    color: theme.palette.common.black,
    fontWeight: "bold",
    fontSize: "1rem",
  }
}));

export { Skills, useStyles };
