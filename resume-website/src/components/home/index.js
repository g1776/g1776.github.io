import {
  makeStyles,
  Container,
  Grid,
  Typography,
  useTheme,
  Button
} from "@material-ui/core";

import FeaturedProjects from "./FeaturedProjects";
import InTheNews from "./InTheNews";
import About from "./About";

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography component="h1" variant="h3" className={classes.quote}>
            Exploring Data Science and Machine Learning
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            className={classes.quoteSubtitle}
          >
            one dataset at a time...
          </Typography>

          <div className={classes.downForMore}>
              <Typography variant="h6" >
                <b>Scroll down for more</b>
              </Typography>
          </div>
          

        </Grid>
        <Grid item xs={12} md={6} className={classes.imgContainer}>
          <img
            src={process.env.PUBLIC_URL + "/me2.jpg"}
            className={classes.img}
            alt="Gregory Glatzer"
          />
        </Grid>
      </Grid>

      <div id="portfolio" className={classes.portfolio}>
        <FeaturedProjects/>
        <InTheNews/>
        <About/>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  imgContainer: {
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  quote: {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  quoteSubtitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
    color: "darkgrey",
  },
  explore: {
    textAlign: "center",
    color: "grey",
    marginTop: theme.spacing(9),
  },
  portfolio: {
    marginTop: theme.spacing(5),
  },
  downForMore: {
    color: theme.palette.common.black,
    textAlign: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  }
  
}));

export default Home;
