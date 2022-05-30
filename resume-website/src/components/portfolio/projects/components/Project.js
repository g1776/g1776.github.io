import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button } from "@material-ui/core";

const Project = (props) => {
  const {
    title,
    subtitle,
    image,
    imgWidth = undefined,
    imgHeight = undefined,
    id,
    noDivider = false,
    chips,
    buttonLinks
  } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid item container className={classes.project}>
        <Grid item container xs={12} md={image === undefined ? 12 : 8}>
          <Grid item xs={12}>
            <Typography variant="h4" id={id} style={{marginTop: "40px"}}>{title}</Typography>
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
          <Typography variant="body1">{props.children}</Typography>
        </Grid>

        {/* Button Links */}
        {
          buttonLinks &&
          
          <Grid item container xs={12} spacing={2} className={classes.btnsContainer}>
          {buttonLinks.map((link) => (
            <Grid item>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="medium"
                  className={classes.btn}
                  onClick={() =>  window.open(link.url, "_blank")}
                  >
                  {link.text}
                </Button>
       
            </Grid>
          ))}
        </Grid>
        }
        

        {/* Skills */}
        {chips &&

        <>
          <Grid item xs={12} style={{marginBottom: theme.spacing(2)}}>
            <Typography variant="h4">Project Skills</Typography>
          </Grid>
          <Grid container spacing={2}>
            {chips.map(chip => <Grid item>{chip}</Grid>)}
          </Grid>
        </>
        }

        {/* Back to top button */}
        <Button 
          className={classes.toTop} 
          variant="contained"
          onClick={() => window.scrollTo(0, 0)}
          >Back to top &uarr;</Button>
        
        

        {
          !noDivider && <hr className={classes.hrAccent} />
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
    marginTop: "40px",
    background: "#153040",
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    }
  },
  btnsContainer: {
    justifyContent: "end", 
    margin: 0, 
    padding: 0, 
    marginBottom: theme.spacing(2)
  },
  toTop: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
  }
}));

export default Project;
