import {
  Paper,
  Grid,
  Typography
} from '@material-ui/core'
import Tilt from 'react-vanilla-tilt'
import { makeStyles } from '@material-ui/core/styles';
import FittedImage from 'react-fitted-image'

function Home() {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Tilt 
      style={{width: "75vw", margin: "auto"}}
      >
        <Paper className={classes.card}>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Typography variant="h2">Gregory Glatzer</Typography>
              <div className={classes.spacer}></div>
              <Typography variant="h6">The Pennsylvania State University | BS Applied Data Science 2023</Typography>

              <section className={classes.intro}>
                <Typography variant="body2" className={classes.introParagraph}>
                Hello! My name is Gregory Glatzer. I am a sophomore at Penn State University working towards a BS in Applied Data Science. 
                I believe that I am always growing as a learner, and that the best way to increase my skills is to listen and practice as much as I can. 
                Whether it is side projects such as building AI for board games, or getting involved with a startup that implements AI into the medical field, 
                I try to immerse myself into the world of all things data science and seize every opportunity I can get!
                </Typography>
                <Typography variant="body2" className={classes.introParagraph}>
                In addition to my passion for all things coding and data, I also enjoy playing music! I play classical clarinet at a high level, 
                which has gotten me to the national level of concert bands and an opportunity to play at Carnegie Hall! I also enjoy listening to and playing jazz.
                </Typography>
                <Typography variant="body2" className={classes.introParagraph}>
                Please enjoy browsing through my resume, and feel free to reach out with any questions!
                </Typography>
              </section>

            </Grid>
            <Grid item xs={12} lg={4} container style={{justifyContent: "center", alignItems: "center"}}>
              <img src={process.env.PUBLIC_URL + '/meTransparent.png'} style={{width: "70%", height: "auto"}}></img>
            </Grid>
          </Grid>
        </Paper>
      </Tilt>
    </main>
  );

}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
    display: "flex",
    height: "100%",
    backgroundColor: theme.palette.common.black
  },
  introParagraph: {
    marginBottom: "1.2em",
  },
  spacer: {
    margin: theme.spacing(1)
  },
  intro: {
    margin: theme.spacing(3)
  },
  card: {
    margin: "auto",
    padding: theme.spacing(3),
    backgroundColor: "#153040",
    color: "white"
  }
}));

export default Home;
