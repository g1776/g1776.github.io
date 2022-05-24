import {
  makeStyles,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import PortfolioCard from "./PortfolioCard";

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

          <Typography component="h2" variant="h4" className={classes.explore}>
            Explore my portfolio below
            <div style={{ marginTop: theme.spacing(2) }}>
              <KeyboardArrowDownIcon fontSize="large" />
            </div>
          </Typography>
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
        <Typography component="h2" variant="h4">
          Featured Projects
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
            <PortfolioCard
            title="Elephant movement research with IST Faculty"
            description="Working with IST Faculty at Penn State, 
            I conducted research on the movement of elephants in sub-saharan Africa, including what environmental and spatial factors affects their movement. 
            Using DBSCAN and KMeans clustering algorithms, I developed a pipeline that yields potential &quot;locations of interest&quot; for elephants. 
            This research led to the publication of my research paper, &quot;An Analysis of Elephants' Movement Data in Sub-Saharan Africa Using Clustering&quot; in the TAWIRI Conference in Arusha, Tanzania."
            image={process.env.PUBLIC_URL + "/Range Cluster Hotspots.png"}
            link={"/projects#openvessel"}
            />
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
            <Grid item xs={12} md={6}>
                
            </Grid>
        </Grid>
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
}));

export default Home;
