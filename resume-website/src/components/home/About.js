import { makeStyles, Typography } from "@material-ui/core";

const About = () => {
  return (
    <>
      <AboutMe />
      <AboutTheSite />
    </>
  );
};

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
      <Typography component="h2" variant="h4">
        About Me
      </Typography>
      <Typography component="p" variant="body1" className={classes.about}>
        <p>
          Welcome to my site. I am a Senior at Penn State University working
          towards a BS in Applied Data Science. I believe in lifelong learning,
          and that the best way to increase my skills is to listen to others and
          practice as much as I can. Whether it is side projects such as
          combining music and CS, doing research with Penn State faculty, or
          working on team competitions such as the Nittany AI Challenge, I try
          to immerse myself into the world of all things data science and seize
          every opportunity I can get!
        </p>
        <p>
          In addition to my dedication to data science, I also have a passion
          for music. I am a classical and jazz clarinetist, minoring in jazz
          clarinet performance. I have performed in state and national
          orchestras and concert bands and have even performed at Carnegie Hall
          (yes, I practiced to get there)!
        </p>
        <p>
          Please enjoy browsing through my portfolio, and feel free to reach out
          with any questions!
        </p>
      </Typography>
    </>
  );
};

const AboutTheSite = () => {
  const classes = useStyles();
  return (
    <>
      <Typography component="h2" variant="h4">
        How this site is made
      </Typography>
      <Typography component="p" variant="body1" className={classes.about}>
        <p>
          I have created this site from scratch using React, Material-UI, and
          GitHub Pages for hosting.
        </p>
      </Typography>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  about: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

export default About;
