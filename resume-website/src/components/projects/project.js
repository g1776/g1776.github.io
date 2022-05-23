import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const Project = (props) => {
  const {
    title,
    subtitle,
    image,
    imgWidth = undefined,
    imgHeight = undefined,
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid item container className={classes.project}>
        <Grid item container xs={12} md={image === undefined ? 12 : 8}>
          <Grid item xs={12}>
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{ paddingBottom: theme.spacing(4) }}
            >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
        {image !== undefined && (
          <Grid
            container
            item
            xs={12}
            md={4}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              width={imgWidth}
              height={imgHeight}
            ></img>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6">{props.children}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  project: {
    marginBottom: theme.spacing(4),
  },
}));

export default Project;
