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
    id,
    hideAccent = false,
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid item container className={classes.project}>
        <Grid item container xs={12} md={image === undefined ? 12 : 8}>
          <Grid item xs={12}>
            <Typography variant="h4" id={id}>{title}</Typography>
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
            className={classes.imgContainer}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              width={imgWidth}
              height={imgHeight}
            ></img>
          </Grid>
        )}

        {/* Main content */}
        <Grid item xs={12}>
          <Typography variant="h6">{props.children}</Typography>
        </Grid>

        {/* Skills */}
        {props.chips &&

        <>
          <Grid item xs={12} style={{marginBottom: theme.spacing(2)}}>
            <Typography variant="h4">Project Skills</Typography>
          </Grid>
          <Grid container spacing={2}>
            {props.chips.map(chip => <Grid item>{chip}</Grid>)}
          </Grid>
        </>
        }
        

        {
          !hideAccent && <hr className={classes.hrAccent} />
        }



      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  project: {
    marginBottom: theme.spacing(4)
  },
  imgContainer: {
    alignItems: "center",
    [theme.breakpoints.up('md')]: {
      justifyContent: "end"
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: "center"
    }
  },
  hrAccent: {
    border: "none",
    height: "2px",
    width: "100%",
    marginBottom: "40px",
    marginTop: "40px",
    background: "#153040",
  },
}));

export default Project;
