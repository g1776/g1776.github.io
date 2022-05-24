import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import DrawerComponent from "./Drawer";
import Logo from "./Logo";

const Section = (props) => {
  return (
    <Grid item xs={"auto"}>
      <Link to={props.to} className="nav-text nav-link">
        <Typography component="h3" variant="h5">
          {props.children}
        </Typography>
      </Link>
    </Grid>
  );
};


function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav>
      {
        isMobile ?
          <DrawerComponent />
        :
      <Grid container className={classes.navContainer}>
        <Grid item xs={12} md={5}>
          <Link to={"/"} className="nav-text">
            <Logo />
          </Link>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={7}
          spacing={5}
          className={classes.navLinksContainer}
        >
          <Section to={"/"}>Home</Section>
          <Section to="/resume">Resume/CV</Section>
          <Section to="/projects">Projects</Section>
          <Section to="/contact">Contact</Section>
        </Grid>
      </Grid>
    }
    </nav>
  );
}

const useStyles = makeStyles((theme) => ({
  navContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  navLinksContainer: {
    justifyContent: "end",
  },
}));

export default Nav;
